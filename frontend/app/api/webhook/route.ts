import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import Stripe from "stripe";

export const runtime = "nodejs";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-11-17.clover",
});

export async function POST(req: Request) {
  const body = await req.text();
  const sig = req.headers.get("stripe-signature");
  const secret = process.env.STRIPE_WEBHOOK_SECRET!;
  let event;

  try {
    event = stripe.webhooks.constructEvent(body, sig!, secret);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 400 });
  }

  switch (event.type) {
    case "customer.subscription.created":
    case "customer.subscription.updated": {
      const sub = event.data.object as Stripe.Subscription;
      const userId = sub.metadata.clerkUserId;

      const isActive =
        sub.status === "active" ||
        sub.status === "trialing" ||
        (sub.cancel_at_period_end === true &&
          ((sub as any).current_period_end * 1000 > Date.now()));

      await prisma.subscription.upsert({
        where: { userId },
        update: {
          stripeCustomerId: sub.customer as string,
          stripeSubscriptionId: sub.id,
          status: sub.status,
          plan: sub.items.data[0].price.id,
          currentPeriodEnd: (sub as any).current_period_end
            ? new Date((sub as any).current_period_end * 1000)
            : null,
          cancelAtPeriodEnd: sub.cancel_at_period_end,
        },
        create: {
          userId,
          stripeCustomerId: sub.customer as string,
          stripeSubscriptionId: sub.id,
          status: sub.status,
          plan: sub.items.data[0].price.id,
          currentPeriodEnd: (sub as any).current_period_end
            ? new Date((sub as any).current_period_end * 1000)
            : null,
          cancelAtPeriodEnd: sub.cancel_at_period_end,
        },
      });

      await prisma.user.update({
        where: { id: userId },
        data: { isPro: isActive },
      });

      break;
    }

    case "customer.subscription.deleted": {
      const sub = event.data.object as Stripe.Subscription;
      const userId = sub.metadata.clerkUserId;

      await prisma.subscription.update({
        where: { userId },
        data: { status: "canceled" },
      });

      await prisma.user.update({
        where: { id: userId },
        data: { isPro: false },
      });

      break;
    }
  }

  return NextResponse.json({ received: true });
}

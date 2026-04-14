import { prisma } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-11-17.clover",
});

export async function POST() {
  const { userId } = await auth();
  if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  // Check if user exists
  const existing = await prisma.user.findUnique({ where: { id: userId } });
  if (existing) return NextResponse.json(existing);

  // Get Clerk user profile
  const clerkUser = await fetch(`https://api.clerk.dev/v1/users/${userId}`, {
    headers: { Authorization: `Bearer ${process.env.CLERK_SECRET_KEY}` },
  }).then(r => r.json());
  const email = clerkUser.email_addresses[0].email_address;

  // Create Stripe customer
  const customer = await stripe.customers.create({
    email,
    metadata: { clerkUserId: userId },
  });

  // Create User row in Prisma
  const user = await prisma.user.create({
    data: { id: userId, email },
  });

  // Create empty subscription row
  await prisma.subscription.create({
    data: {
      stripeCustomerId: customer.id,
      stripeSubscriptionId: "",
      plan: "free",
      status: "inactive",
      userId: userId,
    },
  });

  return NextResponse.json(user);
}

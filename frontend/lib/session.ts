import { currentUser } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";

export async function getCurrentUser() {
  const clerk = await currentUser();
  if (!clerk?.id) return null;

  const user = await prisma.user.findUnique({
    where: { id: clerk.id },
  });

  return user;
}

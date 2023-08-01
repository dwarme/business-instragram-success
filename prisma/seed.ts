import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const daouda = await prisma.user.upsert({
    where: { email: "warme-fake@instagram.com" },
    update: {},
    create: {
      email: "warme-fake@instagram.com",
      // this is a hashed version of "twixrox"
      password: "$2b$10$K7L1OJ45/4Y2nIvhRVpCe.FSmhDdWoXehVzJptJ/op0lSsvqNu/1u",
      firstName: "Daouda",
      lastName: "Warme",
      role: "ADMIN",
    },
  });

  const lisa = await prisma.user.upsert({
    where: { email: "lisa-fake@instagram.com" },
    update: {},
    create: {
      email: "lisa-fake@instagram.com",
      // this is a hashed version of "twixrox"
      password: "$2b$10$K7L1OJ45/4Y2nIvhRVpCe.FSmhDdWoXehVzJptJ/op0lSsvqNu/1u",
      firstName: "Lisa",
      lastName: "Smith",
      role: "USER",
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

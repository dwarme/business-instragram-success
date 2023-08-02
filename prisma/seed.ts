import { PrismaClient } from "@prisma/client";
import { initBrandsData, initUsersData } from "./init-data";

const prisma = new PrismaClient();

async function main() {
  const users: any[] = [];

  for (const userData of initUsersData) {
    users.push(
      prisma.user.upsert({
        where: { email: userData.email },
        update: {},
        create: {
          email: userData.email,
          password: userData.password,
          lastName: userData.lastName,
          firstName: userData.firstName,
          role: userData.role,
        },
      })
    );
  }

  await Promise.all(users);

  for (const initBrandData of initBrandsData) {
    const { info, story, stats, goal, solutions, creative } = initBrandData;
    const brandStats: any[] = [];
    const brandSolutions: any[] = [];

    // Create brand
    const brandCreated = await prisma.brand.create({
      data: { ...info },
    });

    // Create story
    const brandStoryCreated = await prisma.brandStory.create({
      data: {
        brandId: brandCreated.id,
        ...story,
      },
    });

    // Create stats
    for (const stat of stats) {
      brandStats.push(
        prisma.brandStoryStat.create({
          data: {
            brandStoryId: brandCreated.id,
            ...stat,
          },
        })
      );
    }

    await Promise.all(brandStats);

    // Create goal
    const brandGoalCreatedData = await prisma.brandGoal.create({
      data: {
        brandId: brandCreated.id,
        ...goal,
      },
    });

    // Create solutions
    for (const solution of solutions) {
      brandSolutions.push(
        prisma.brandSolution.create({
          data: {
            brandId: brandCreated.id,
            ...solution,
          },
        })
      );
    }

    await Promise.all(brandSolutions);

    // Create creative
    const creativeCreated = await prisma.creative.create({
      data: {
        brandId: brandCreated.id,
        ...creative,
      },
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

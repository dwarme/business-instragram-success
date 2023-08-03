import { LoaderArgs, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { prisma } from "utils/prisma.server";
import BrandGoal from "~/components/success-details/brand-goal";
import BrandHero from "~/components/success-details/brand-hero";
import BrandSolutions from "~/components/success-details/brand-solutions/brand-solutions";
import BrandStory from "~/components/success-details/brand-story";

export async function loader({ params }: LoaderArgs) {
  const { handle } = params;
  const brandInfo = await prisma.brand.findFirst({
    where: { handle },
  });

  if (!brandInfo) {
    throw new Response("Not found", { status: 404 });
  }

  const story = await prisma.brandStory.findFirst({
    where: { brandId: brandInfo.id },
  });

  const goal = await prisma.brandGoal.findFirst({
    where: { brandId: brandInfo.id },
  });

  const stats = await prisma.brandStoryStat.findMany({
    where: { brandStoryId: brandInfo.id },
  });

  const solutions = await prisma.brandSolution.findMany({
    where: { brandId: brandInfo.id },
  });

  const brand = {
    info: brandInfo,
    story,
    goal,
    stats,
    solutions,
  };

  return json({ brand });
}

export default function CaseStudyRoute() {
  const { brand } = useLoaderData<typeof loader>();
  console.log(brand.story);
  console.log(brand);
  return (
    <main role="main">
      <div className="_2noi">
        <BrandHero brandInfo={brand.info} />
        {brand.story && brand.stats && (
          <BrandStory story={brand.story} stats={brand.stats} />
        )}

        <div style={{ backgroundColor: "white" }}>
          <div className="_22s6 _2an6">
            {brand.goal && <BrandGoal goal={brand.goal} />}
            {brand.solutions && <BrandSolutions solutions={brand.solutions} />}
          </div>
        </div>
      </div>
    </main>
  );
}

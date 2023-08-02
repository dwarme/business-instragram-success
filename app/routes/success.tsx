import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { IBrand, ICreative } from "types";
import CreativeGrid from "~/components/crative-grid";
import FilterGrid from "~/components/filter-grid";
import { prisma } from "utils/prisma.server";

export async function loader() {
  const creativesResult = await prisma.creative.findMany({
    orderBy: { createdAt: "desc" },
    skip: 0,
    take: 10,
  });

  const creatives: (ICreative & { brand: IBrand })[] = [];
  for (const creative of creativesResult) {
    const brand = await prisma.brand.findUnique({
      where: { id: creative.brandId },
    });

    creatives.push({
      ...creative,
      brand: brand!,
    });
  }
  return json({ creatives });
}

export default function SuccessRoute() {
  const { creatives } = useLoaderData<typeof loader>();

  return (
    <main role="main">
      <div className="_2noi">
        <div
          className="_599_ _3rap"
          style={{
            background: "linear-gradient(7deg, #ffd521, #f50000 40%, #b900b4)",
          }}
        >
          <div className="_5lia">
            <div className="_5k62 _5nd9 _3rn7">
              <div className="_vu5 _4ok7 _3rn7">
                <h1 style={{ color: "white" }}>Case studies</h1>
              </div>
              <p
                className="_5tdb _4yc6"
                style={{ color: "white" }}
                data-ms='{"creative":"content"}'
              >
                From major brands to local, family-run shops, businesses around
                the world are driving proven results with Instagram.
              </p>
            </div>
          </div>
        </div>
        <div style={{ backgroundColor: "white" }}>
          <div className="_2srm _22s6 _1fmy">
            <div className="_22s6 _2an6 _2an7">
              <div className="_22s6 _1fwj _2srm _2an8">
                <div className="_z7y _4ok7">
                  See how other advertisers are inspiring action.
                </div>
                <p className="_5tdb _4yc6" data-ms='{"creative":"content"}'>
                  Get the inside scoop on how businesses around the world use
                  Instagram ads to get real business results – from brand
                  awareness to increased sales.
                </p>
              </div>
              <FilterGrid />
              <CreativeGrid creatives={creatives} />
            </div>
          </div>
        </div>
        ;
      </div>
    </main>
  );
}

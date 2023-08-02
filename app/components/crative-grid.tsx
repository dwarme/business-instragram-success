import { IBrandListing, ICreativeListing } from "types";
import CreativeCard from "./creative-card";
import React from "react";
import { useFetcher } from "@remix-run/react";

const CreativeGrid: React.FC<{
  creatives: (ICreativeListing & { brand: IBrandListing })[];
}> = ({ creatives }) => {
  const fetcher = useFetcher();
  function fetchMoreProducts() {}

  return (
    <React.Fragment>
      <div className="_5rnu">
        {creatives.map((creative) => (
          <CreativeCard key={creative.id} creative={creative} />
        ))}
      </div>
      <div className="_1fm- _474e _7ya" id="u_0_6_rt">
        <button className="_1avb">
          <div
            className="_2srm _5k62 _5nd9"
            data-ms='{"creative":"button","creative_detail":""}'
          >
            <div className="_438d">
              <div className="_t0e _t0f"></div>
              <button
                value="1"
                className="_42ft _f4m"
                onClick={fetchMoreProducts}
              >
                Load more
              </button>
            </div>
          </div>
        </button>
      </div>
    </React.Fragment>
  );
};

export default CreativeGrid;

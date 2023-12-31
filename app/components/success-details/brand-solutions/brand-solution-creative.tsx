import React from "react";
import { IBrandSolutionListing, ICreativeListing } from "types";

const BrandSolutionCreative: React.FC<{ data: IBrandSolutionListing }> = ({
  data,
}) => {
  return (
    <div className="_4mdd _1slv _6g1k">
      <div className="__sw __sz __t3 __ta">
        <div className="_5k8 _8-l5">
          <div className="_7jam _2q_m pts">
            <div
              style={{ width: "91%", height: "91%" }}
              className="_7jan _4sea _4seb"
            >
              <div className="_2s8m _3fcf _6z_p _7jap _21op _7jap _21op">
                <div
                  style={{
                    backgroundImage: `url(${data.imageUrl})`,
                  }}
                  className="_3fcf _2s8n _3gnj _2s93"
                ></div>
              </div>
            </div>
            <div className="_7jao _7jaq">
              <img
                className="_2qnn _7jap _21op img"
                src="https://scontent.fmxp6-1.fna.fbcdn.net/v/t39.8562-6/84680660_2751573224898381_8553505654352904192_n.png?stp=dst-webp&amp;_nc_cat=107&amp;ccb=1-7&amp;_nc_sid=7a0af4&amp;_nc_ohc=7SY522CDKIkAX_ms7lp&amp;_nc_ht=scontent.fmxp6-1.fna&amp;oh=00_AfCkqdbMDoegcpfkG2Yyv6fTbishpL4qqlX3RvPjxHFZMQ&amp;oe=64CE9619"
                width=""
                height=""
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandSolutionCreative;

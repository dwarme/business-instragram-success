import React from "react";

const BrandSolutionDescription: React.FC<{
  htmlDescription: string;
  title: string;
}> = ({ htmlDescription, title }) => {
  return (
    <div className="_4mdd _1slv _6g1k">
      <div className="__sw __sz __t3 __ta">
        <div className="_9nzq _2__g _fkg _9nfj _9o33 _9nfr _9ng6 _2ajy _2ak0 _8-cz _60-9 _7-w4 _60-a _7-w5">
          <div className="__sw _4xq8 __sz __t3 __ta">
            <div className="_49wt">
              <h5
                className="_3tmt _8r7q _8r7h _7n50 _34g8 _9d0_ _8-c-"
                style={{
                  fontFamily:
                    "proxima-nova, Helvetica Neue, Helvetica, Arial, sans-serif",
                  color: "#ccc",
                  fontSize: "16px",
                }}
              >
                THE SOLUTION
              </h5>
              <h2 className="_3tmr _8r7o _8r7h _7n51 _34g8 _9d11 _8-c_">
                {title}
              </h2>
              <div className="_38io _8r7i _7oxw ptm _30jd _8r7m">
                <p
                  className="_5yvq"
                  dangerouslySetInnerHTML={{ __html: htmlDescription }}
                ></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandSolutionDescription;

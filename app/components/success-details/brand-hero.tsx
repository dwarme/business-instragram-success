// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable hydrogen/prefer-image-component */
import { IBrandListing } from "types";

const BrandHero: React.FC<{ brandInfo: IBrandListing }> = ({ brandInfo }) => {
  return (
    <div className="_qus" data-ms='{"creative":"case_study_hero"}'>
      <div className="_5uah">
        <div
          className="_1l4s _3rap"
          style={{
            backgroundImage: `url(${brandInfo.coverImageUrl})`,
            filter: "blur(0px)",
          }}
        ></div>
        <div className="_1l4t" style={{ opacity: 0.5 }}></div>
        <div className="_424t">
          <div className="_qvh">
            <div className="_5k62 _5nd9">
              <div className="_vu5 _4ok7">
                <h1 style={{ color: "white" }}>{brandInfo.name}</h1>
              </div>
              <p
                className="_5tdb _4yc6"
                style={{ color: "white" }}
                data-ms='{"creative":"content"}'
              >
                {brandInfo.about}
              </p>
            </div>
            <div className="_qvi">
              <div
                className="_2srm _5k62 _5nd9"
                data-ms='{"creative":"button","creative_detail":""}'
              >
                <div className="_438d">
                  <div className="_t0e _t0g"></div>
                  <a
                    role="button"
                    className="_42ft _f4m"
                    href={`https://www.instagram.com/${brandInfo.username}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View @{brandInfo.username}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className="_qvj img" src={brandInfo.profileImageUrl} alt="" />
    </div>
  );
};

export default BrandHero;

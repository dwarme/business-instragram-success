import React from "react";
import { ICreativeFilter } from "types";

const FilterCard: React.FC<{ filter: ICreativeFilter }> = ({ filter }) => {
  return (
    <div className="_1933" id={`filter-${filter.name}`}>
      <div className="_1935" id="u_0_3d_ci">
        <p className="_5tdb _4yc5" data-ms='{"creative":"content"}'>
          {filter.title}
        </p>
        <div className="_1xi8">
          <div className="_11a4"></div>
          <div className="_11a3"></div>
        </div>
      </div>
      <div className="_1xi9">
        <div className="_1xia"></div>
        <div className="_1xib"></div>
        <div className="_193a" id="u_0_3e_6H">
          <div className="_3rhw"></div>
          <div className="_25t0"></div>
          <div className="_1xid">
            {filter.values.map((value) => (
              <a
                key={value}
                className="_1avb _1938"
                data-ms='{"creative":"link","creative_detail":""}'
                rel="async noreferrer"
                role="button"
                href="#1"
              >
                <p className="_5tdb _4yc5" data-ms='{"creative":"content"}'>
                  {value}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterCard;

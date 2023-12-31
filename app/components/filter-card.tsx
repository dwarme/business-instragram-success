import { Link, useLocation, useSearchParams } from "@remix-run/react";
import React from "react";
import { ICreativeFilter } from "types";

const FilterCard: React.FC<{ filter: ICreativeFilter }> = ({ filter }) => {
  const { pathname, search } = useLocation();
  const [currentSearchParams] = useSearchParams();

  const searchParams = currentSearchParams;
  const currentOptionVal = searchParams.get(filter.name);
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
            {filter.values.map((value) => {
              // Build a URLSearch object from the current search string
              const linkParams = new URLSearchParams(search);
              const isSelected = value === currentOptionVal;
              if (isSelected) {
                return undefined;
              }
              // Set the option name and value, overwriting any existing values
              linkParams.set(filter.name, value);
              return (
                <Link
                  key={value}
                  to={`${pathname}?${linkParams.toString()}`}
                  preventScrollReset
                  replace
                  className="_1avb _1938"
                  data-ms='{"creative":"link","creative_detail":""}'
                  role="button"
                >
                  <p className="_5tdb _4yc5" data-ms='{"creative":"content"}'>
                    {value}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterCard;

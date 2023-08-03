import React, { useMemo } from "react";
import FilterCard from "./filter-card";
import creativeFilters from "resources/creative-filters";
import { useLocation } from "@remix-run/react";
import { Link } from "react-router-dom";

const FilterGrid: React.FC = () => {
  return (
    <div className="_13bw _474e _7ya _13c0" id="u_0_4_v0">
      <div className="_2srm">
        <div className="_4mhi">
          <div className="_4mhf _193b" id="u_0_1u_vb">
            <p
              className="_5tdb _4yc5"
              style={{ color: "#999" }}
              data-ms='{"creative":"content"}'
            >
              Filter by
            </p>
            <div className="_4mhj"></div>
          </div>
          <div className="_4mhe">
            {creativeFilters.map((filter) => (
              <FilterCard key={filter.name} filter={filter} />
            ))}
          </div>
        </div>
        <FilterOptionsSelectedPreview />
      </div>
    </div>
  );
};

const FilterOptionsSelectedPreview: React.FC = () => {
  const { pathname, search } = useLocation();
  const optionsSelected: { name: string; value: string }[] = useMemo(() => {
    const selected: { name: string; value: string }[] = [];
    const linkParams = new URLSearchParams(search);
    for (const key of linkParams.keys()) {
      selected.push({
        name: key,
        value: linkParams.get(key)!,
      });
    }

    return selected;
  }, [search]);

  return (
    <div className="_4mhg">
      {optionsSelected.map((option) => {
        const linkParams = new URLSearchParams(search);
        linkParams.delete(option.name);
        return (
          <div key={option.name} className="_4mhh">
            <Link
              to={`${pathname}?${linkParams.toString()}`}
              preventScrollReset
              replace
              className="_1avb _o5j"
              data-ms='{"creative":"link","creative_detail":""}'
              rel="async noreferrer"
              role="button"
            >
              <i className="img sp_MOAVF_w7qFo_2x sx_0ae40a"></i>
            </Link>
            <p className="_5tdb _4yc6" data-ms='{"creative":"content"}'>
              {option.value}
            </p>
          </div>
        );
      })}
    </div>
  );
};
export default FilterGrid;

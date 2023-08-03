import React from "react";
import FilterCard from "./filter-card";
import creativeFilters from "resources/creative-filters";

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
        <div className="_4mhg"></div>
      </div>
    </div>
  );
};

export default FilterGrid;

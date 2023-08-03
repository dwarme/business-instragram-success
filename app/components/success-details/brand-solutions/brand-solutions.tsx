import React from "react";
import BrandSolution from "./brand-solution";
import { IBrandSolutionListing } from "types";

const BrandSolutions: React.FC<{ solutions: IBrandSolutionListing[] }> = () => {
  return (
    <div className="_5r7f _60-9 _60-a _17bk _4uul _8-d3 _9jwg">
      <BrandSolution />
    </div>
  );
};

export default BrandSolutions;

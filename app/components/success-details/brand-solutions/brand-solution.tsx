import { IBrandSolutionListing } from "types";
import BrandSolutionCreative from "./brand-solution-creative";
import BrandSolutionDescription from "./brand-solution-description";

const BrandSolution: React.FC<{ solution: IBrandSolutionListing }> = ({
  solution,
}) => {
  return (
    <div className="_2__g _4sea _4seb _3wgx">
      <BrandSolutionCreative data={solution} />
      <BrandSolutionDescription
        htmlDescription={solution.contentHtml}
        title={solution.title}
      />
    </div>
  );
};

export default BrandSolution;

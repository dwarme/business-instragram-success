import { IBrandGoalListing } from "types";

const BrandGoal: React.FC<{ goal: IBrandGoalListing }> = ({ goal }) => {
  return (
    <div
      className="_5nd9 _2srm _22s6 _5auf _-c5"
      data-ms='{"creative":"case_study_section"}'
    >
      <div className="_z7_ _4ok7 _5aug" style={{ color: "#ccc" }}>
        THE GOAL
      </div>
      <div className="_z7y _4ok7">{goal.title}</div>
      <p className="_5tdb _4yc6" data-ms='{"creative":"content"}'>
        {goal.description}
      </p>
    </div>
  );
};

export default BrandGoal;

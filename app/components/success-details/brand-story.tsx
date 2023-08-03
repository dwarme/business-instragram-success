import { IBrandStatListing, IBrandStoryListing } from "types";

const BrandStory: React.FC<{
  story: IBrandStoryListing;
  stats: IBrandStatListing[];
}> = ({ story, stats }) => {
  return (
    <div className="_22s6 _2an6">
      <div
        className="_5nd9 _2srm _22s6 _5auf _-c5"
        data-ms='{"creative":"case_study_section"}'
      >
        <div className="_z7_ _4ok7 _5aug" style={{ color: "#ccc" }}>
          THE STORY
        </div>
        <div className="_z7y _4ok7">{story.title}</div>
        <p className="_5tdb _4yc6" data-ms='{"creative":"content"}'>
          {story.description}
        </p>
      </div>
      {stats.length > 0 && (
        <div className="_2srm _22s6">
          <div className="_3r29 _2984">
            {stats.map((stat) => (
              <div key={stat.id} className="_2m2s _2m2x _2m3f _3r29 _1w_6">
                <div className="_2m2s _2m2t _2m3f">
                  <div className="_18qf _5nd9">
                    <div className="_z7y _4ok7">{stat.title}</div>
                    <p className="_5tdb _4yc6" data-ms='{"creative":"content"}'>
                      {stat.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {Boolean(story.note) && (
        <div className="_22s6 _2srm _3hc1">
          <div className="_z7- _4ok7 _3hc2 _66i">{story.note}</div>
          <div className="_z7_ _4ok7 _3hc3">{story.noteReference}</div>
        </div>
      )}
    </div>
  );
};

export default BrandStory;

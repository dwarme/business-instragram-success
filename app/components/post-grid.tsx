import PostCard from "./post-card";

const PostGrid: React.FC<{ posts: any[] }> = ({ posts }) => {
  return (
    <>
      <div className="_5rnu">
        {posts.map((post, idex) => (
          <PostCard key={idex} {...post} />
        ))}
      </div>
      <div className="_1fm- _474e _7ya" id="u_0_6_rt">
        <button className="_1avb">
          <div
            className="_2srm _5k62 _5nd9"
            data-ms='{"creative":"button","creative_detail":""}'
          >
            <div className="_438d">
              <div className="_t0e _t0f"></div>
              <button value="1" className="_42ft _f4m" type="submit">
                Load more
              </button>
            </div>
          </div>
        </button>
      </div>
    </>
  );
};

export default PostGrid;

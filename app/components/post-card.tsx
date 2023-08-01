import React from "react";
import { Image } from "@shopify/hydrogen";
import { Link } from "@remix-run/react";

interface PostCardProps {
  imageSrc: string;
  link: string;
  title: string;
  subtitle: string;
}

const PostCard: React.FC<PostCardProps> = ({
  imageSrc,
  link,
  title,
  subtitle,
}) => {
  return (
    <div
      className="_5k99 _474e _7ya post-card"
      data-ms='{"creative":"case_study_ref"}'
      id="u_0_3i_Ax"
    >
      <Link className="_2lxl card-content" to={link}>
        <div className="_5k9a card-image-container">
          <Image
            className="_5k9b _5k9c _5k9b _5k9c img card-image"
            src={imageSrc}
            alt=""
            data-ms='{"creative":"image"}'
          />
          <div className="_2pke"></div>
        </div>
        <div className="_5k9d card-overlay">
          <div>
            <p
              className="_5tdb _4yc6 _5k9e post-title"
              data-ms='{"creative":"content"}'
            >
              {title}
            </p>
            <div
              className="_z7z _4ok7 _2lxm post-subtitle"
              style={{ color: "white" }}
            >
              {subtitle}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PostCard;

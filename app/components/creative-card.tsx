import React from "react";
import { Image } from "@shopify/hydrogen";
import { Link } from "@remix-run/react";
import { IBrandListing, ICreativeListing } from "types";

interface CreativeCardProps {
  creative: ICreativeListing & { brand: IBrandListing };
}

const CreativeCard: React.FC<CreativeCardProps> = ({ creative }) => {
  return (
    <div
      className="_5k99 _474e _7ya creative-card"
      data-ms='{"creative":"case_study_ref"}'
      id="u_0_3i_Ax"
    >
      <Link
        className="_2lxl card-content"
        to={`/success/${creative.brand.handle}`}
      >
        <CreativeGallery imageSrc={creative.imageUrl} />
        <CreativeInfo {...creative} />
      </Link>
    </div>
  );
};

const CreativeGallery: React.FC<{ imageSrc: string }> = ({ imageSrc }) => {
  return (
    <div className="_5k9a card-image-container">
      <Image
        className="_5k9b _5k9c _5k9b _5k9c img card-image"
        src={imageSrc}
        alt=""
        data-ms='{"creative":"image"}'
      />
      <div className="_2pke"></div>
    </div>
  );
};

const CreativeInfo: React.FC<{ title: string; subtitle: string }> = ({
  title,
  subtitle,
}) => {
  return (
    <div className="_5k9d card-overlay">
      <div>
        <p
          className="_5tdb _4yc6 _5k9e creative-brand"
          data-ms='{"creative":"content"}'
        >
          {title}
        </p>
        <div
          className="_z7z _4ok7 _2lxm creative-title"
          style={{ color: "white" }}
        >
          {subtitle}
        </div>
      </div>
    </div>
  );
};

export default CreativeCard;

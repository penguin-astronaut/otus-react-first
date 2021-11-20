import React from "react";
import "./style.scss";

export interface IImageProps {
  src: string;
  alt: string;
  float?: string;
}

const Image: React.FC<IImageProps> = ({
  src,
  alt,
  float = "right",
}): JSX.Element => {
  let className = "img";
  if (float === "left") {
    className += " img--left";
  }
  return <img className={className} src={src} alt={alt} />;
};
export default Image;

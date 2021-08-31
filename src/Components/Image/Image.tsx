import React from "react";

interface IImageProps {
  src: string;
  alt: string;
}

const Image: React.FC<IImageProps> = ({ src, alt }): JSX.Element => (
  <img src={src} alt={alt} />
);

export default Image;

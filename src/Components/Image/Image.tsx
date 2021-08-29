import React from "react";

const Image = (props: {src: string, alt: string}) => {
  return (
    <img src={props.src} alt={props.alt} />
  )
}

export default Image;
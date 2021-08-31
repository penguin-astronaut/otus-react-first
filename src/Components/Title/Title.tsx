import React from "react";

interface ITitleProps {
  level: number;
  children: JSX.Element | string;
}

const Title: React.FC<ITitleProps> = ({ level, children }) => {
  let titleLevel = level;
  if (level > 6) {
    titleLevel = 6;
  } else if (level < 1) {
    titleLevel = 1;
  }
  const TitleElement = `h${titleLevel}` as keyof JSX.IntrinsicElements;

  return <TitleElement>{children}</TitleElement>;
};

export default Title;

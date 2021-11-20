import React from "react";

export interface ITitleProps {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: JSX.Element | string;
}

const Title: React.FC<ITitleProps> = ({ level, children }) => {
  const TitleElement = `h${level}` as keyof JSX.IntrinsicElements;

  return <TitleElement>{children}</TitleElement>;
};

export default Title;

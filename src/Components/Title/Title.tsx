import React from "react";

interface ITitleProps {
  level: number;
  children: JSX.Element | string;
}

const Title = (props: ITitleProps): JSX.Element => {
  let { level } = props;
  if (level > 6) {
    level = 6;
  } else if (level < 1) {
    level = 1;
  }
  const TitleElement = `h${level}` as keyof JSX.IntrinsicElements;

  return <TitleElement>{props.children}</TitleElement>;
};

export default Title;

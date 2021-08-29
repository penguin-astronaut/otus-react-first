import React from "react";

interface ITitleProps {
  level: number,
  children: JSX.Element | string
}

const Title = (props: ITitleProps) => {
  let {level, children} = props;
  if (level > 6) {
    level = 6
  } else if(level < 1) {
    level = 1
  }
  const TitleElement = `h${level}` as keyof JSX.IntrinsicElements;

  return <TitleElement>{children}</TitleElement>;
}

export default Title;
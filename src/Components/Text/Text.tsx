import React from "react";
import "./style.scss";

interface ITextProps {
  semiBold?: boolean;
  cursive?: boolean;
  children: JSX.Element | string;
}

const Text = (props: ITextProps) => {
  const { semiBold, cursive, children } = props;
  let classes = "text";
  classes += semiBold ? " text--semi-bold" : "";
  classes += cursive ? " text--cursive" : "";

  return <p className={classes}>{children}</p>;
};

export default Text;

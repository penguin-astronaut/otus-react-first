import React from "react";
import "./style.scss";

export interface ITextProps {
  semiBold?: boolean;
  cursive?: boolean;
  children: JSX.Element | string;
}

const Text: React.FC<ITextProps> = ({ semiBold, cursive, children }) => {
  let classes = "text";
  classes += semiBold ? " text--semi-bold" : "";
  classes += cursive ? " text--cursive" : "";

  return <p className={classes}>{children}</p>;
};

export default Text;

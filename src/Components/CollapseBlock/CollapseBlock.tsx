import React from "react";
import "./style.scss";

interface ICollapseBlockProps {
  children: JSX.Element;
  title: string;
  collapse?: boolean;
}
const CollapseBlock = (props: ICollapseBlockProps): JSX.Element => {
  let classNames = "collapse-block__body";
  classNames += props.collapse ? " collapse-block__body--collapse" : "";
  return (
    <div className="collapse-block">
      <div className="collapse-block__header">
        <div className="collapse-block__title">{props.title}</div>
      </div>
      <div className={classNames}>{props.children}</div>
    </div>
  );
};

export default CollapseBlock;

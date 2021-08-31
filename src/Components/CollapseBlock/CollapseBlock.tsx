import React from "react";
import "./style.scss";

interface ICollapseBlockProps {
  children: JSX.Element | string;
  title: string;
  collapse?: boolean;
}
const CollapseBlock: React.FC<ICollapseBlockProps> = ({
  children,
  title,
  collapse,
}): JSX.Element => {
  let classNames = "collapse-block__body";
  classNames += collapse ? " collapse-block__body--collapse" : "";
  return (
    <div className="collapse-block">
      <div className="collapse-block__header">
        <div className="collapse-block__title">{title}</div>
      </div>
      <div className={classNames}>{children}</div>
    </div>
  );
};

export default CollapseBlock;

import React from "react";
import "./style.scss";

export interface ICollapseBlockProps {
  children: JSX.Element | string;
  title: string;
  collapse?: boolean;
}
export interface ICollapseBlockState {
  collapse: boolean;
}

class CollapseBlock extends React.Component<
  ICollapseBlockProps,
  ICollapseBlockState
> {
  state = {
    collapse: this.props.collapse ?? false,
  };

  onHeaderClick = (): void => {
    this.setState({ collapse: !this.state.collapse });
  };

  render(): JSX.Element {
    let classNames = "collapse-block__body";
    classNames += this.state.collapse ? " collapse-block__body--collapse" : "";

    return (
      <div className="collapse-block">
        <div className="collapse-block__header" onClick={this.onHeaderClick}>
          <div className="collapse-block__title">{this.props.title}</div>
        </div>
        <div className={classNames}>{this.props.children}</div>
      </div>
    );
  }
}

export default CollapseBlock;

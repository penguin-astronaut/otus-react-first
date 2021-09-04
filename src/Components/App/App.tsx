/* eslint-disable no-alert */
/* eslint-disable no-constant-condition */
/* eslint-disable no-continue */
import React from "react";
import Title from "../Title";
import Text from "../Text";
import CollapseBlock from "../CollapseBlock";
import Image from "../Image";
import "./style.scss";

interface ComponentAvailable {
  component: React.FC | React.ComponentClass;
  props: string[];
}

class App extends React.Component<Record<string, never>, { elements: any[] }> {
  state = {
    elements: [] as any[],
  };

  askComponentForRender(): void {
    const componetsAvilable: Record<string, ComponentAvailable> = {
      title: {
        component: Title,
        props: ["children", "level"],
      },
      text: {
        component: Text,
        props: ["children", "semiBold", "cursive"],
      },
      collapseblock: {
        component: CollapseBlock,
        props: ["children", "title", "collapse"],
      },
      image: {
        component: Image,
        props: ["src", "alt", "float"],
      },
    };

    const elements = [];
    const componetsAvilableString = Object.keys(componetsAvilable).join(" or ");
    while (true) {
      const componentName = prompt(
        `Enter component name: ${componetsAvilableString}`
      )
        ?.trim()
        .toLowerCase();
      if (!componentName) {
        break;
      }
      const selectComponent = componetsAvilable[componentName];
      if (!selectComponent) {
        continue;
      }

      const props: Record<string, any> = {};
      selectComponent.props.forEach((propName) => {
        const propValue = prompt(`Enter prop ${propName} value`);
        props[propName] = propValue;
      });
      elements.push({ component: selectComponent.component, props });
    }

    this.setState({ elements });
  }

  componentDidMount(): void {
    this.askComponentForRender();
  }

  render() {
    return (
      <>
        {this.state.elements?.map((item) => (
          <item.component {...item.props} />
        ))}
      </>
    );
  }
}

export default App;

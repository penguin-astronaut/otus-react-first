import React from "react";

import { Meta, Story } from "@storybook/react";

import CollapseBlock, { ICollapseBlockProps } from "./CollapseBlock";

export default {
  component: CollapseBlock,
  title: "Components/CollapseBlock",
} as Meta;
const Template: Story<ICollapseBlockProps> = (args) => (
  <CollapseBlock {...args} />
);

export const Collapsed = Template.bind({});
export const Opened = Template.bind({});

Collapsed.args = {
  title: "Collapse title",
  collapse: true,
  children: <div>Text body hidden</div>,
};

Opened.args = {
  title: "Opened title",
  children: <div>Text body view</div>,
};

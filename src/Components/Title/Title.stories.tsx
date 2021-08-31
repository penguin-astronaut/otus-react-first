import React from "react";

import { Meta, Story } from "@storybook/react";

import Title, { ITitleProps } from "./Title";

export default {
  component: Title,
  title: "Components/Title",
} as Meta;
const Template: Story<ITitleProps> = (args) => <Title {...args} />;
export const H1 = Template.bind({});
export const H2 = Template.bind({});
export const H3 = Template.bind({});
export const H4 = Template.bind({});
export const H5 = Template.bind({});
export const H6 = Template.bind({});

H1.args = {
  level: 1,
  children: "Title h1",
};
H2.args = {
  level: 2,
  children: "Title h2",
};
H3.args = {
  level: 3,
  children: "Title h3",
};
H4.args = {
  level: 4,
  children: "Title h4",
};
H5.args = {
  level: 5,
  children: "Title h5",
};
H6.args = {
  level: 6,
  children: "Title h6",
};

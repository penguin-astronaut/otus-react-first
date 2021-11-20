import React from "react";

import { Meta, Story } from "@storybook/react";

import Text, { ITextProps } from "./Text";

export default {
  component: Text,
  title: "Components/Text",
} as Meta;
const Template: Story<ITextProps> = (args) => <Text {...args} />;

export const Default = Template.bind({});
export const SemiBold = Template.bind({});
export const Cursive = Template.bind({});

Default.args = {
  children: "Default text",
};

SemiBold.args = {
  children: "SemiBold text",
  semibold: true,
};

Cursive.args = {
  children: "SemiBold text",
  cursive: true,
};

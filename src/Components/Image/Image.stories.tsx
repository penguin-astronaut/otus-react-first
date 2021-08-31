import React from "react";

import { Meta, Story } from "@storybook/react";

import Image, { IImageProps } from "./Image";

export default {
  component: Image,
  title: "Components/Image",
} as Meta;
const Template: Story<IImageProps> = (args) => <Image {...args} />;

export const Picture = Template.bind({});

Picture.args = {
  src: "https://via.placeholder.com/150",
  alt: "alt text",
};

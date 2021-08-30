import React from "react";
import { render, screen } from "@testing-library/react";
import Text from "./Text";

describe("Text component", () => {
  it("simple text", () => {
    render(<Text>Test Text</Text>);
    expect(screen.getByText("Test Text")).toBeInTheDocument();
  });
  it("cursive text", () => {
    render(<Text cursive>Test Text</Text>);
    expect(screen.getByText("Test Text")).toHaveClass("text--cursive");
  });
  it("cursive and semi-bold text", () => {
    render(
      <Text cursive semiBold>
        Test Text
      </Text>
    );
    expect(screen.getByText("Test Text")).toHaveClass("text--cursive");
    expect(screen.getByText("Test Text")).toHaveClass("text--semi-bold");
  });
});

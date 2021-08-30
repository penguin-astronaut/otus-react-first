import React from "react";
import { render, screen } from "@testing-library/react";
import CollapseBlock from "./CollapseBlock";

describe("CollapseBlock component", () => {
  it("block opened", () => {
    render(<CollapseBlock title="Test title">Inner text</CollapseBlock>);
    expect(screen.getByText("Inner text")).not.toHaveClass(
      "collapse-block__body--collapse"
    );
    expect(
      screen.getByText("Test title").classList.contains("collapse-block__title")
    ).toBeTruthy();
  });

  it("block collapsed", () => {
    render(
      <CollapseBlock title="Test title" collapse>
        Inner text
      </CollapseBlock>
    );
    expect(screen.getByText("Inner text")).toHaveClass(
      "collapse-block__body--collapse"
    );
    expect(
      screen.getByText("Test title").classList.contains("collapse-block__title")
    ).toBeTruthy();
  });
});

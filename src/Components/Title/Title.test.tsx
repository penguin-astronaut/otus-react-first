import React from "react";
import { render, screen } from "@testing-library/react";
import Title from "./Title";

describe("Title test", () => {
  it("h1 test", () => {
    render(<Title level={1}>Test title</Title>);
    expect(screen.getByText("Test title")).toBeInTheDocument();
    expect(screen.getByText("Test title").tagName).toBe("H1");
  });

  it("h3 test", () => {
    render(<Title level={3}>Test title</Title>);
    expect(screen.getByText("Test title")).toBeInTheDocument();
    expect(screen.getByText("Test title").tagName).toBe("H3");
  });
});

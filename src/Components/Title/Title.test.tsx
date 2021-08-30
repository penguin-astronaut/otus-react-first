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

  it("level < 0", () => {
    render(<Title level={-2}>Test title</Title>);
    expect(screen.getByText("Test title")).toBeInTheDocument();
    expect(screen.getByText("Test title").tagName).toBe("H1");
  });

  it("level > 6", () => {
    render(<Title level={10}>Test title</Title>);
    expect(screen.getByText("Test title")).toBeInTheDocument();
    expect(screen.getByText("Test title").tagName).toBe("H6");
  });
});

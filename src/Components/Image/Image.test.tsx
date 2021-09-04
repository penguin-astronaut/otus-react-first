import React from "react";
import { render, screen } from "@testing-library/react";
import Image from "./Image";

describe("Text component", () => {
  it("render img", () => {
    render(<Image src="https://someurl.com/someimg.jpg" alt="simple alt" />);
    expect((screen.getByAltText("simple alt") as HTMLImageElement).src).toBe(
      "https://someurl.com/someimg.jpg"
    );
    expect(
      (
        screen.getByAltText("simple alt") as HTMLImageElement
      ).classList.contains("img--left")
    ).toBeFalsy();
  });
  it("img left float", () => {
    render(
      <Image
        src="https://someurl.com/someimg.jpg"
        alt="simple alt"
        float="left"
      />
    );
    expect(
      (
        screen.getByAltText("simple alt") as HTMLImageElement
      ).classList.contains("img--left")
    ).toBeTruthy();
  });
});

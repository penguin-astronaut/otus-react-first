import React from "react";
import { render, screen } from "@testing-library/react"
import Image from './Image'

describe('Text component', () => {
  it('render img', () => {
    render(<Image src='https://someurl.com/someimg.jpg' alt='simple alt'></Image>)
    expect((screen.getByAltText('simple alt') as HTMLImageElement).src).toBe('https://someurl.com/someimg.jpg')
  })
})
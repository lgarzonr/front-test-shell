import React from "react";
import { render } from "@testing-library/react";
import DetailApp from "./DetailApp";
import { BrowserRouter } from "react-router-dom";

jest.mock("AppDetail/bootstrap", () => ({ mount: jest.fn() }), {
  virtual: true,
});

describe("DetailApp", () => {
  it("Should render container", async () => {
    const view = render(
      <BrowserRouter>
        <DetailApp />
      </BrowserRouter>
    );
    expect(view).toBeTruthy();
  });
});

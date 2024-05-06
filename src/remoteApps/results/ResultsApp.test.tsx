import React from "react";
import { render } from "@testing-library/react";
import ResultsApp from "./ResultsApp";
import { BrowserRouter } from "react-router-dom";

jest.mock("AppResults/bootstrap", () => ({ mount: jest.fn() }), {
  virtual: true,
});

describe("HeaderApp", () => {
  it("Should render container", async () => {
    const view = render(
      <BrowserRouter>
        <ResultsApp />
      </BrowserRouter>
    );
    expect(view).toBeTruthy();
  });
});

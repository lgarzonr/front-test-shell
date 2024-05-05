import React from "react";
import { render, waitFor } from "@testing-library/react";
import HeaderApp from "./HeaderApp";
import { BrowserRouter } from "react-router-dom";

jest.mock("AppHeader/bootstrap", () => ({ mount: jest.fn() }), {
  virtual: true,
});

describe("HeaderApp", () => {
  it("Should render container", async () => {
    const view = render(
      <BrowserRouter>
        <HeaderApp />
      </BrowserRouter>
    );
    expect(view).toBeTruthy();
  });
});

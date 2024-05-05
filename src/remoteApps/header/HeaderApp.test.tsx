import React from "react";
import { render, waitFor } from "@testing-library/react";
import HeaderApp from "./HeaderApp";

jest.mock("AppHeader/bootstrap", () => ({ mount: jest.fn() }), {
  virtual: true,
});

describe("HeaderApp", () => {
  it("Should render container", async () => {
    const view = render(<HeaderApp />);
    expect(view).toBeTruthy();
  });
});

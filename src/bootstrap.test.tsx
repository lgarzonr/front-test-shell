import React from "react";

const createRoot = jest.fn(() => ({ render: jest.fn() }));
jest.mock("react-dom/client", () => ({
  createRoot,
}));

const HeaderApp = jest.fn(() => <div></div>);
jest.mock("./remoteApps/header/HeaderApp", () => HeaderApp);

jest
  .spyOn(document, "getElementById")
  .mockReturnValue(document.createElement("div"));

describe("bootstrap", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  const bootstrap = require("./bootstrap");
  it("Should call render", () => {
    expect(bootstrap).not.toBe(undefined);
    expect(createRoot).toHaveBeenCalled();
  });
});

import { render } from "@testing-library/react";
import React from "react";
import HomeView from "./homeView";

describe("home View", () => {
  it("Should render component", () => {
    const view = render(<HomeView />);
    expect(
      view.getByText("Implementación de buscador para prueba front-end MELI")
    ).toBeTruthy();
  });
});

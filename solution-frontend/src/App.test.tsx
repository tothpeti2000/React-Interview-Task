import React from "react";
import { screen } from "@testing-library/react";
import { render } from "./test-utils";
import { App } from "./App";

test("renders API key", () => {
  render(<App />);

  expect(screen.getByTestId("apiKey").textContent).toBe(
    process.env.REACT_APP_API_KEY
  );
});

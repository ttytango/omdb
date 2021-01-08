import React from "react";
import { render } from "@testing-library/react";
import SearchYear from "./SearchYear";

describe("SearchYear tests", () => {
  it("should render", () => {
    expect(render(<SearchYear />)).toBeTruthy();
  });
});

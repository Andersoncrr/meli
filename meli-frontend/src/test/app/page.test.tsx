import React from "react";
import { render } from "@testing-library/react";
import Home from "@/app/page";

describe("Home Component", () => {
  test("renders Home component", async () => {
    render(<Home />);
  });
});

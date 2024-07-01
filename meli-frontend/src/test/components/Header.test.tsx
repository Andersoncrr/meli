import React from "react";
import { render } from "@testing-library/react";
import { Header } from "@/components";

describe("Header Component", () => {
  test("renders Header component", async () => {
    render(<Header />);
  });
});

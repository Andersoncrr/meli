import React from "react";
import { render } from "@testing-library/react";
import { Input } from "@/components";

describe("Input Component", () => {
  test("renders Input component", async () => {
    render(<Input />);
  });
});

import React from "react";
import { render } from "@testing-library/react";
import { Breadcrumb } from "@/components";

describe("Breadcrumb Component", () => {
  test("renders Breadcrumb component", async () => {
    const { getByText } = render(<Breadcrumb categories={["test"]} />);

    const textTest = getByText("test");
    expect(textTest).toBeInTheDocument();
  });
});

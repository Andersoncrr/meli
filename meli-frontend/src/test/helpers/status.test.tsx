// formatCurrency.test.ts

import { status } from "@/helpers/status";

describe("status", () => {
  it("should return status", () => {
    const result = status("new");
    expect(result).toEqual("Nuevo");
  });
});

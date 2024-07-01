// formatCurrency.test.ts

import { formatCurrency } from "@/helpers/format";

describe("formatCurrency", () => {
  it("should format currency correctly with given decimals", () => {
    const result = formatCurrency({
      currency: "ARS",
      amount: 1234.56,
      decimals: 2,
    });

    expect(result.decimalPart).toEqual("56");
  });
});

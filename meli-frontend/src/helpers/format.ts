export const formatCurrency = ({
  currency,
  amount,
  decimals,
}: {
  currency: string;
  amount: number;
  decimals: number;
}) => {
  const formattedCurrency = amount.toLocaleString("es-AR", {
    style: "currency",
    currency: currency,
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
  const [integerPart, decimalPart] = formattedCurrency.split(",");

  return {
    integerPart,
    decimalPart,
  };
};

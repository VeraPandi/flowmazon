export function FormatPrice(price: number) {
  return price.toLocaleString("fr", {
    style: "currency",
    currency: "EUR",
  });
}

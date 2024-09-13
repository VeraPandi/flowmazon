export function formatPrice(price: number) {
  return price.toLocaleString("fr", {
    style: "currency",
    currency: "EUR",
  });
}

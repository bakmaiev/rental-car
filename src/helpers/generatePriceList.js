export function generatePriceList() {
  const priceList = [];
  const minPrice = 20;
  const maxPrice = 500;
  const step = 10;
  for (let price = minPrice; price <= maxPrice; price += step) {
    priceList.push(price.toString());
  }
  return priceList;
}

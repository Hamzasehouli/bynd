import { allProducts } from "./allProducts";
console.log(allProducts);

export const sampleShoes = [
  ...allProducts.filter((p) => p.collection === "bestselling"),
];

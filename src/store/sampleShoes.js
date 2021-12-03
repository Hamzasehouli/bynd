import { allProducts } from "./allProducts";

export const sampleShoes = [
  ...allProducts.filter((p) => p.collection === "bestselling"),
];

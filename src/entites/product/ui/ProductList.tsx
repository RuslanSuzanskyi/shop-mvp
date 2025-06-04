import { ProductProps } from "../model/types";
import InfiniteProductList from "./InfiniteProductList";

export default async function ProductList() {
  const res = await fetch(`https://fakestoreapi.in/api/products?limit=150`, {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error("Failed to load initial products");
  }

  const data = await res.json();
  const allProducts: ProductProps[] = data.products || [];

  return (
    <InfiniteProductList initialProducts={allProducts} />
  );
}
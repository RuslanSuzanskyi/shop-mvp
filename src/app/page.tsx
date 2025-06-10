import ProductList from "@/entites/product/ui/ProductList";
import { Suspense } from "react";

async function getAllProducts() {
  try {
    const res = await fetch('https://fakestoreapi.in/api/products?limit=150', {
      next: { revalidate: 3600 }
    });

    if (!res.ok) {
      console.error(`Failed to fetch all products: ${res.status} ${res.statusText}`);
    };

    const data = await res.json();
    return data.products || [];
  } catch (error) {
    console.error("Error in getAllProducts (server):", error);
    return [];
  }
};

export default async function HomePage() {
  const allProducts = await getAllProducts();

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <ProductList products={allProducts}/>
      </Suspense>
    </>
  );
}

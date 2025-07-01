import ProductList from "@/entites/product/ui/ProductList";
import { Suspense } from "react";

export default async function HomePage() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <ProductList />
      </Suspense>
    </>
  );
}

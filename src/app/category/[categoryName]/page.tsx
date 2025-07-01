import ProductList from "@/entites/product/ui/ProductList";
import { Suspense } from "react";

interface CategoryPageProps {
  params: { categoryName: string };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const decodedCategoryName = decodeURIComponent(params.categoryName);

  return (
    <Suspense fallback={<div>Loading category products...</div>}>
      <ProductList categoryName={decodedCategoryName} />
    </Suspense>
  );
}

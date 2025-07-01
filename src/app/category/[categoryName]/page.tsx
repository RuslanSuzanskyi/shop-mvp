import ProductList from "@/entites/product/ui/ProductList";
import { Suspense } from "react";

type PageParams = { categoryName: string };

export default async function CategoryPage({
  params,
}: {
  params: Promise<PageParams>;
}) {
  const { categoryName } = await params;
  const decodedCategoryName = decodeURIComponent(categoryName);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProductList categoryName={decodedCategoryName} />
    </Suspense>
  );
};


import { ProductProps } from "@/entites/product/model/types";
import ProductList from "@/entites/product/ui/ProductList";
import { Suspense } from "react";

type PageParams = { categoryName: string };

async function getCategoryProducts(categoryName: string): Promise<ProductProps[]> {
  try {
    const res = await fetch(`https://fakestoreapi.in/api/products/category?type=${categoryName}`, {
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      console.error(`Failed to fetch products: ${res.status} ${res.statusText}`);
    }

    const data = await res.json();
    return data.products || [];
  } catch (error) {
    console.error("Error in getCategoryProducts:", error);
    return [];
  }
};

export default async function CategoryPage({
  params,
}: {
  params: Promise<PageParams>;
}) {
  const { categoryName } = await params;
  const decodedCategoryName = decodeURIComponent(categoryName);

  const categoryProducts = await getCategoryProducts(decodedCategoryName);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProductList products={categoryProducts} />
    </Suspense>
  );
};


import ProductList from "@/entites/product/ui/ProductList";

type PageParams = { categoryName: string };

export default async function CategoryPage({
  params,
}: {
  params: Promise<PageParams>;
}) {
  const { categoryName } = await params;
  const decodedCategoryName = decodeURIComponent(categoryName);

  return (
    <ProductList categoryName={decodedCategoryName} />
  );
};


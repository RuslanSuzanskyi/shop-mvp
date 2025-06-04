export default async function CategoryPage({ params }: { params: Promise<{ name: string }> }) {
  const resolvedParams = await params;
  const categoryName = decodeURIComponent(resolvedParams.name);

  const res = await fetch(`https://fakestoreapi.in/api/products/category/${categoryName}`);

  if (!res.ok) {
    throw new Error('Failed to load category');
  }

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold capitalize mb-6">{categoryName}</h1>
    </main>
  );
}

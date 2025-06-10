import Link from "next/link";

export default async function HeaderList() {
  const res = await fetch('https://fakestoreapi.in/api/products/category', {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error('Failed to load categories');
  };

  const categories: string[] = await res.json();

  return (
    <ul className="hidden lg:flex items-center justify-between pl-24 text-nowrap">
      {categories.map((category) => (
        <li key={category}>
          <Link href={`/category/${encodeURIComponent(category)}`} className="p-4 text-xl font-medium uppercase relative no-underline after:absolute after:bottom-2 after:left-0 after:h-[2px] after:bg-black after:w-0 after:transition-all after:duration-400 hover:after:w-full">
            {category}
          </Link>
        </li>
      ))}
    </ul>
  );
}
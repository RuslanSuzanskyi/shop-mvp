import { getCategoryListClass } from "../../../utils/getCategoryListClass";
import { CategoryListProps } from "../model/types";

export default async function CategoryList({ variant }: CategoryListProps) {
  const res = await fetch('https://fakestoreapi.in/api/products/category', {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error('Failed to load categories');
  };

  const data = await res.json();
  const categories: string[] = data.categories;

  return (
    <ul className={getCategoryListClass(variant)}>
      {categories.map((category) => (
        <li key={category}>
          <a className="p-4 text-xl font-medium uppercase relative no-underline after:absolute after:bottom-2 after:left-0 after:h-[2px] after:bg-black after:w-0 after:transition-all after:duration-400 hover:after:w-full" href={`/category/${encodeURIComponent(category)}`}>{category}</a>
        </li>
      ))}
    </ul>
  );
};
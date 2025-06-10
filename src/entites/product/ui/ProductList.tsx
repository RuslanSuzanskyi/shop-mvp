import { ProductProps } from "../model/types";
import ProductCard from "./ProductCard";
interface ProductListProps {
  products: ProductProps[];
}

export default function ProductList({ products }: ProductListProps) {
  return (
    <>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <li key={product.id} className="w-full">
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
    </>
  );
}

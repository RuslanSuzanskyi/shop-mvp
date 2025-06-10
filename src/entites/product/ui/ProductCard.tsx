import Link from "next/link";
import { ProductProps } from "../model/types";
import Image from "next/image";

export default function ProductCard({ product }: { product: ProductProps }) {
  return (
    <article className="p-4 h-full flex flex-col justify-between">
      <Link href={`/product/${encodeURIComponent(product.id)}`} className="group">
        <div className="w-full aspect-square relative overflow-hidden">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="w-full h-full group-hover:scale-105 transition duration-300 object-scale-down"
          />
        </div>
      </Link>
      <div className="flex flex-col gap-2 p-4">
        <Link href={`/product/${encodeURIComponent(product.id)}`} className="uppercase text-xl whitespace-nowrap overflow-hidden transition duration-300 text-ellipsis hover:text-gray-500">
          {product.title}
        </Link>
        <span className="font-medium text-2xl">
          {product.price} $
        </span>  
      </div>
    </article>
  );
};
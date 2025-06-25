"use client";

import ProductCard from "@/entites/product/ui/ProductCard";
import { selectWishlistItems } from "@/features/wishlist/wishlistSelectors";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";

export default function WishlistPage() {
  const dispatch = useDispatch();
  const wishlistItems = useSelector(selectWishlistItems);

  return (
    <>
      <h1 className="text-4xl font-bold text-center py-10">YOUR WISHLIST</h1>

      {wishlistItems.length === 0 ? (
        <>
          <p className="uppercase">
            YOUR WISHLIST IS EMPTY
          </p>
          <Link href="/" className="mt-8 min-w-[640px] rounded-md inline-block py-8 px-16 bg-gray-300 font-medium uppercase text-2xl transition duration-300 hover:opacity-50 text-center">Return Home</Link>
        </>
      ) : (
        <ul>
          {wishlistItems.map(product => (
            <li key={product.id} className="w-full">
              <ProductCard product={product} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
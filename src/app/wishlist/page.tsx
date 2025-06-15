"use client";

import ProductCard from "@/entites/product/ui/ProductCard";
import WishlistButton from "@/entites/wishlist/ui/WishlistButton";
import { RootState } from "@/lib/store";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";

export default function WishlistPage() {
  const dispatch = useDispatch();
  const wishlistItems = useSelector((state: RootState) => state.wishlist.items);

  return (
    <>
      <h1 className="text-4xl font-bold text-center py-10">YOUR WISHLIST</h1>

      {wishlistItems.length === 0 ? (
        <>
        <p>
          YOUR WISHLIST IS EMPTY
        </p>
        <Link href="/" className="mt-8 min-w-[640px] rounded-md inline-block py-8 px-16 bg-gray-300 font-medium uppercase text-2xl transition duration-300 hover:opacity-50 self-center">Return Home</Link>
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
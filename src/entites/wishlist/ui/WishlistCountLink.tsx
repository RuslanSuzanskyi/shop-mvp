"use client";

import { RootState } from "@/lib/store";
import Link from "next/link";
import { FaRegBookmark } from "react-icons/fa";
import { useSelector } from "react-redux";

export default function WishlistCountLink() {
  const wishlistCount = useSelector((state: RootState) => state.wishlist.items.length);
  
  return (
    <Link href="/wishlist" className="relative hover:text-gray-500 transition duration-300">
      <FaRegBookmark className="h-8 w-8" />
      <span className="absolute -top-2 -right-2 bg-blue-700 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center border-0">
        {wishlistCount}
      </span>
    </Link>
  );
};
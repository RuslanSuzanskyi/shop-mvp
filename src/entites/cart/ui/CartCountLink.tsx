"use client";

import { selectCartCount } from "@/features/cart/cartSelectors";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";

export default function CartCountLink() {
  const cartCount = useSelector(selectCartCount);
  
  return (
    <Link href="/cart" className="p-2 relative hover:text-gray-500 transition duration-300">
      <FaShoppingCart className="h-8 w-8" />
      <span className="absolute -top-2 -right-2 bg-blue-700 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center border-0">
        {cartCount}
      </span>
    </Link>
  );
};
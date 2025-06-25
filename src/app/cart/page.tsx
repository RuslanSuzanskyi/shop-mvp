"use client";

import CartTitle from "@/entites/cart/ui/CartTitle";
import { selectCartItems } from "@/features/cart/cartSelectors";
import Link from "next/link";
import { useSelector } from "react-redux";

export default function CartPage() {
  const items = useSelector(selectCartItems);

  return (
    <>
      <section className="border-b border-solid border-gray-300">
        <CartTitle />
      </section>

      {items.length === 0 ? (
        <>
          <p className="uppercase">
            YOUR CART IS EMPTY
          </p>
          <Link href="/" className="mt-8 min-w-[640px] rounded-md inline-block py-8 px-16 bg-gray-300 font-medium uppercase text-2xl transition duration-300 hover:opacity-50 text-center">Return Home</Link>
        </>
      ) : (
        <ul className="space-y-4">
          {items.map(item => (
            <li key={item.id} className="border p-4 rounded">
              <p className="font-semibold">{item.title}</p>
              <p>Qty: {item.quantity}</p>
              <p>${item.price.toFixed(2)}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
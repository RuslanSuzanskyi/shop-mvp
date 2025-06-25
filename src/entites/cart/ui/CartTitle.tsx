"use client";

import { selectCartTotalCount } from "@/features/cart/cartSelectors";
import { useSelector } from "react-redux"

export default function CartTitle() {
  const totalCount = useSelector(selectCartTotalCount);

  return (
    <h1 className="text-5xl pb-10 text-left uppercase font-medium">CART ({totalCount})</h1>
  )
};
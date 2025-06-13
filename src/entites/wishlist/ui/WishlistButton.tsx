"use client";

import { FaBookmark, FaRegBookmark  } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { WishlistButtonProps } from "../model/types";
import { addToWishlist, removeFromWishlist } from "@/features/wishlist/wishlistSlice";

export default function WishlistButton({ product, className }: WishlistButtonProps) {
  const dispatch = useDispatch();
  const wishlistItems = useSelector((state: RootState) => state.wishlist.items);

  const isInWishlist = wishlistItems.some(item => item.id === product.id);

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if(isInWishlist) {
      dispatch(removeFromWishlist(product.id))
    } else {
      dispatch(addToWishlist(product))
    }
  };

  return (
    <button
      className={`p-2 z-10 min-w-8 ${className}`}
      aria-label={isInWishlist ? `Remove ${product.title} from wishlist` : `Add ${product.title} to wishlist`}
      onClick={handleWishlistToggle}
    >
      {isInWishlist ? (
        <FaBookmark className="h-8 w-8" />
      ) : (
        <FaRegBookmark className="h-8 w-8" />
      )}
    </button>
  );
};
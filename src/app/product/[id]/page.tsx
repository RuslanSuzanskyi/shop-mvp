import { ProductProps } from "@/entites/product/model/types";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Suspense } from "react";

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id: productId } = await params;

  const res = await fetch(`https://fakestoreapi.in/api/products/${productId}`, {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error("Failed to load product");
  }

  const data = await res.json();
  const product: ProductProps = data.product;

  if (!product || product.id.toString() !== productId) {
    notFound();
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="flex flex-row justify-between">
        <div className="flex-1 flex flex-col gap-6">
          <h2 className="text-4xl font-medium capitalize">
            {product.title}
          </h2>
          <span className="font-medium text-5xl">
            {product.price} $
          </span>
        </div>
        <div className="flex-1 aspect-square relative mx-8 overflow-hidden">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="w-full h-full group-hover:scale-105 transition duration-300 object-scale-down"
          />
        </div>
        <div className="flex-1 flex flex-col gap-12 p-8">
          <div className="flex flex-col gap-4 pb-8 border-b border-solid border-gray-300">
            <h3 className="text-3xl font-medium uppercase">
              MODEL
            </h3>
            <p className="flex-1 text-2xl">
              {product.model}
            </p>
          </div>

          <div className="flex flex-col gap-4 pb-8 border-b border-solid border-gray-300">
            <h3 className="text-3xl font-medium uppercase">
              PRODUCT DETAILS
            </h3>
            <p className="flex-1 text-2xl">
              {product.description}
            </p>
          </div>

          {product.color && (
            <div className="flex flex-col gap-4">
              <h3 className="text-3xl font-medium uppercase">
                CHARACTERISTICS
              </h3>
              <span className="flex-1 text-2xl">
                Color:
                <span className="pl-4 capitalize">
                  {product.color}
                </span>
              </span>
            </div>
          )}
        </div>
      </div>  
    </Suspense>
    
  );
}
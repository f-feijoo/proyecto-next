'use client'
import ProductCard from "@/components/ProductCard";
import mockData from "@/data/mockData";
import { useParams } from "next/navigation";
import React from "react";

const ProductPage = () => {
  const { id } = useParams();
  const product = mockData.find((product) => product.id.toString() === id.toString());
  return (
    <div className='flex h-dvh justify-center bg-gray-500 items-center'>
      <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{product.title}</div>
        <hr />
        <p className="text-white">{product.description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-black mr-2 mb-2">
          {product.category}
        </span>
        <span className="inline-block bg-amber-500 rounded-full px-3 py-1 text-sm font-semibold text-black mr-2 mb-2">
          {product.price}
        </span>
      </div>
    </div>
    </div>
  );
};

export default ProductPage;

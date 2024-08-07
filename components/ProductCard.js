import Link from "next/link";
import React from "react";

const ProductCard = ({ title, description, price, category, id }) => {
  return (
    <Link href={`/producto/${id}`}>
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <hr />
        <p className="text-white">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-black mr-2 mb-2">
          {category}
        </span>
        <span className="inline-block bg-amber-500 rounded-full px-3 py-1 text-sm font-semibold text-black mr-2 mb-2">
          {price}
        </span>
      </div>
    </div>
    </Link>
  );
};

export default ProductCard;

import Image from "next/image";
import React from "react";

const ProductCard = ({ title, description, price, category, image }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
      <div className="text-center">
        <Image src={image} alt={title} width={100} height={100} />
      </div>
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
   
  );
};

export default ProductCard;

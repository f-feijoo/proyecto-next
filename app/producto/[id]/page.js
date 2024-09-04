import ProductCard from "@/components/ProductCard";
import React from "react";

const getProducto = async (id) => {
  const data = await fetch(`http://localhost:3000/api/producto/${id}`, {
    cache: "no-store",
  });
  const producto = await data.json();
  return producto;
};

const ProductPage = async ({ params }) => {
  const { id } = params;
  const product = await getProducto(id);
  return (
    <div className="flex h-dvh justify-center bg-gray-500 items-center">
      <ProductCard
        image={product.image}
        title={product.title}
        description={product.description}
        price={product.price}
        category={product.category}
      />
    </div>
  );
};

export default ProductPage;

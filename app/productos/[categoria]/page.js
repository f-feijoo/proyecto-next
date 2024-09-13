import React from "react";
import ProductList from "@/components/ProductList";
import mockData from "@/data/mockData";

// const getProductos = async (category) => {
//   const data = await fetch(`http://localhost:3000/api/productos/${category}`, {
//     cache: "no-store",
//   });
//   const productos = await data.json();
//   return productos;
// };

const Categoria = async ({ params }) => {
  const { categoria } = params;
  const productos = mockData.filter((item) => item.category == categoria);
  return (
    <>
      <ProductList category={categoria} data={productos} />
    </>
  );
};

export default Categoria;

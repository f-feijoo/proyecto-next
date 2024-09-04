import ProductList from "@/components/ProductList";
import React from "react";
import Button from "@/components/Button";
import Link from "next/link";

const getProductos = async () => {
  const data = await fetch(`http://localhost:3000/api/productos`, {
    cache: "no-store",
  });
  const productos = await data.json();
  return productos;
};

const Productos = async () => {
  const productos = await getProductos();
  return (
    <>
      <ProductList category={"all"} data={productos} />
      <Link href="http://localhost:3000/">
        <Button className="p-3 mt-3">Volver</Button>
      </Link>
    </>
  );
};

export default Productos;

"use client";
import { useParams } from "next/navigation";
import React from "react";
import mockData from "@/data/mockData";
import ProductList from "@/components/ProductList";

const Categoria = () => {
  const { categoria } = useParams();
  const filterData =
    categoria === "all"
      ? mockData
      : mockData.filter(
          (item) => item.category.toLowerCase() === categoria.toLowerCase()
        );
  return (
    <>
      <ProductList category={categoria} data={filterData} />
    </>
  );
};

export default Categoria;

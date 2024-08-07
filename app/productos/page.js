"use client";
import ProductList from "@/components/ProductList";
import React from "react";
import Button from "@/components/Button";
import { useRouter } from "next/navigation";
import mockData from "@/data/mockData";

const Productos = () => {
  const router = useRouter();
  return (
    <>
      <ProductList category={"all"} data={mockData} />
      <Button className="p-3 mt-3" onClick={router.back}>
        Volver
      </Button>
    </>
  );
};

export default Productos;

"use client";
import { useParams } from "next/navigation";
import React from "react";

const Categoria = () => {
  const { categoria } = useParams();
  return <h1>Esta pagina es por el tipo: { categoria }</h1>;
};

export default Categoria;

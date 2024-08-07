"use client";
import Button from "@/components/Button";
import { useRouter } from "next/navigation";
import React from "react";

const Nosotros = () => {
  const router = useRouter();
  return (
    <div className="h-[84vh] flex justify-center flex-col items-center bg-gray-500">
      <h1>En construccion...</h1>
      <Button className="p-3 mt-3" onClick={router.back}>Volver</Button>
    </div>
  );
};

export default Nosotros;

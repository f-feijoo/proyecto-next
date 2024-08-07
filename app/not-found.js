'use client'
import Button from "@/components/Button";
import { useRouter } from "next/navigation";
import React from "react";

const NotFound = () => {
    const router = useRouter()
  return (
    <div className="flex-col h-[84vh] flex justify-center items-center bg-gray-500">
      <h1>Pagina no encontrada</h1>
      <Button className="p-3 mt-3" onClick={router.back}>Volver</Button>
    </div>
  );
};

export default NotFound;

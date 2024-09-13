import NavigationMenu from "@/components/NavigationMenu";
import React from "react";
import { Suspense } from "react";

const layout = ({ children }) => {
  return (
    <div>
      <NavigationMenu />
      <Suspense fallback={<div>Cargando...</div>}>{children}</Suspense>
    </div>
  );
};

export default layout;

import NavigationMenu from "@/components/NavigationMenu";
import React from "react";

const layout = ({ children }) => {
  return (
    <div>
      <NavigationMenu />
      {children}
    </div>
  );
};

export default layout;

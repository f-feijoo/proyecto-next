import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-100 border-t">
      <div className="container m-auto py-2 text-sm text-gray-700 flex justify-between items-center ">
        <p>Desarrollado por Francisco Feijoo</p>
        <div>
          <p>Powered by</p>
          <Image src={"/next.svg"} alt={"Next"} width={50} height={50} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

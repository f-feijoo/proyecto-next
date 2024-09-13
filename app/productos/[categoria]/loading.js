import React from "react";
import Image from "next/image";

const Loading = () => {
  return (
    <div className="w-full h-full min-h-screen flex justify-center items-center">
      <Image
        src={"/loading.svg"}
        alt="Loading"
        width={150}
        height={150}
        className=""
      />
    </div>
  );
};

export default Loading;

import React from "react";

const Button = ({ children, className = "", ...args }) => {
  return (
    <button
      className={`rounded-lg py-2 bg-amber-500 text-white ${className}`}
      {...args}
    >
      {children}
    </button>
  );
};

export default Button;

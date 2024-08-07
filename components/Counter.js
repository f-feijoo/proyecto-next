"use client";
import React, { useState } from "react";
import Button from "./Button";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const increase = () => {
    setCounter(counter + 1);
  };
  const decrease = () => {
    if (counter === 0) {
      return;
    }
    setCounter(counter - 1);
  };
  return (
    <div className="flex gap-5 justify-center items-center">
      <Button className="p-2" onClick={decrease}>
        -
      </Button>
      <div>{counter}</div>
      <Button className="p-2" onClick={increase}>
        +
      </Button>
    </div>
  );
};

export default Counter;

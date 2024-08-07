"use client";
import Image from "next/image";
import React, { useState } from "react";
import MenuList from "./MenuList";

const Menu = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div
      onClick={() => {
        if (!open) {
          handleOpen();
        }
      }}
    >
      <Image
        src={"/hamburgermenu.svg"}
        alt="menu-logo"
        height={40}
        width={40}
        className="cursor-pointer"
      />
      <MenuList handleClose={handleClose} open={open} />
    </div>
  );
};

export default Menu;

"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const MenuList = ({ open, handleClose }) => {
  const path = usePathname();
  return (
    <div
      className={`${
        open ? "opacity-100 visible" : "opacity-0 invisible"
      } transition-all fixed inset-0 flex justify-end`}
    >
      <aside
        className={`${
          !open ? "translate-x-48" : ""
        } transition-all w-[20vw] bg-gray-700`}
      >
        <div
          onClick={() => {
            if (open) {
              handleClose();
            }
          }}
          className="text-white text-right p-4 cursor-pointer"
        >
          X
        </div>
        <nav className="flex mt-4 flex-col gap-3 px-3">
          <Link
            href="/"
            className={`${
              path === "/" ? "underline text-amber-500 font-bold " : ""
            }text-white p-2`}
            onClick={() => {
              if (open) {
                handleClose();
              }
            }}
          >
            Inicio
          </Link>
          <Link
            href="/productos"
            className={`${
              path === "/productos" ? "underline text-amber-500 font-bold " : ""
            }text-white p-2`}
            onClick={() => {
              if (open) {
                handleClose();
              }
            }}
          >
            Productos
          </Link>
          <Link
            href="/carrito"
            className={`${
              path === "/carrito" ? "underline text-amber-500 font-bold " : ""
            }text-white p-2`}
            onClick={() => {
              if (open) {
                handleClose();
              }
            }}
          >
            Carrito
          </Link>
          <Link
            href="/nosotros"
            className={`${
              path === "/nosotros" ? "underline text-amber-500 font-bold " : ""
            }text-white p-2`}
            onClick={() => {
              if (open) {
                handleClose();
              }
            }}
          >
            Nosotros
          </Link>
        </nav>
      </aside>
    </div>
  );
};

export default MenuList;

"use client";
import mockData from "@/data/mockData";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function getCategories(data) {
  const categories = data.map((item) => item.category);
  return [...new Set(categories)];
}

const NavigationMenu = () => {
  const path = usePathname();
  const categories = getCategories(mockData);
  return (
    <div className="bg-gray-800 p-4 ">
      <ul className="flex space-x-4 justify-center">
        <li
          className={`${
            path === "/productos" ? "underline text-amber-500 font-bold" : ""
          } text-white`}
        >
          <Link href={`/productos/`}>All</Link>
        </li>
        {categories.map((category, index) => (
          <li
            key={index}
            className={`${
              path === "/productos/" + category.toLowerCase()
                ? "underline text-amber-500 font-bold"
                : ""
            } text-white`}
          >
            <Link href={`/productos/${category.toLowerCase()}`}>
              {category}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavigationMenu;

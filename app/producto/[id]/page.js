"use client";

import { useCartContext } from "@/app/context/CartContext";
import Button from "@/components/Button";
import ProductCard from "@/components/ProductCard";
import mockData from "@/data/mockData";
import React from "react";

const ProductPage = ({ params }) => {
  const { id } = params;
  const { addToCart } = useCartContext();
  const product = mockData.find((item) => item.id.toString() === id.toString());
  //   const [product, setProduct] = useState(null);
  //   useEffect(() => {
  //     const fetchData = async () => {
  //       const data = await fetch(`http://localhost:3000/api/producto/${id}`, {
  //         cache: "no-store",
  //       });
  //       const producto = await data.json();
  //       setProduct(producto);
  //     };
  //     fetchData();
  //   }, [id]);

  return (
    <div className="flex h-dvh justify-center bg-gray-500 items-center">
      <ProductCard
        image={product.images[0]}
        title={product.title}
        description={product.description}
        price={product.price}
        category={product.category}
      />
      <Button className="p-3" onClick={addToCart(product)}>
        Aregar al carrito
      </Button>
    </div>
  );
};

export default ProductPage;

import React from 'react'
import ProductCard from './ProductCard'
import Link from "next/link";


const ProductList = ({data}) => {
  return (
    <div className='flex flex-wrap justify-center bg-gray-500 items-center'>
        {data.map((product) =>(
          <Link key={product.slug} href={`/producto/${product.slug}`}>
            <ProductCard
            image={product.image}
            title={product.title}
            description={product.description}
            price={product.price}
            category={product.category}
            /></Link>
        ))}
    </div>
  )
}

export default ProductList
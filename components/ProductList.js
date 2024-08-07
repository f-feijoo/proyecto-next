import React from 'react'
import ProductCard from './ProductCard'

const ProductList = ({data}) => {
  return (
    <div className='flex flex-wrap justify-center bg-gray-500 items-center'>
        {data.map((product) =>(
            <ProductCard
            key={product.id}
            id={product.id}
            title={product.title}
            description={product.description}
            price={product.price}
            category={product.category}
            />
        ))}
    </div>
  )
}

export default ProductList
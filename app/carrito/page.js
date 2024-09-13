'use client'
import React from 'react'
import { useCartContext } from '../context/CartContext'

const Carrito = () => {
  const {cart} = useCartContext()
  return (
    <div className="h-dvh flex justify-center items-center bg-gray-500">
      {cart.map(item => <h2 key={item.id}>{item.title} - {item.map}</h2>)}
    </div>
  )
}

export default Carrito
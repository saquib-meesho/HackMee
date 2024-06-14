'use client'
import React from 'react'
import { useCart } from '../context/CartContext';
import { CartItemInterface } from '../interfaces';
import CartItem from '../components/CartItem';

const Cart = () => {
    const { state } = useCart();

    console.log(state);
    
  return (
    <div className='w-full flex items-start justify-center bg-gray-100 min-h-screen'>
      <div className='px-40 w-full py-4 flex flex-col items-center justify-start gap-2'>
        <h1 className='text-2xl font-bold text-gray-700'>Your Cart</h1>
        <div className='w-[80%] flex flex-col items-center justify-start gap-2 mt-4'>
            {state.items.map((item: CartItemInterface, index: number) => (
                <CartItem key={index} item={item} />
            ))}
        </div>
      </div>
    </div>
  )
}

export default Cart

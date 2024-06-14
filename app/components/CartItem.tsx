'use client'
import React from 'react'
import { useCart } from '../context/CartContext'
import { CartItemInterface } from '../interfaces';

import { FaPlus, FaMinus } from "react-icons/fa";

interface propsInterface {
    item: CartItemInterface
}

const CartItem: React.FC<propsInterface> = ({item}) => {

    const { addToCart, removeFromCart } = useCart();

    const incrementItem = () => {
        addToCart({
            ...item,
            quantity: 1
        })
    }

    const decrementItem = () => {
        removeFromCart(item.product_id)
    }

  return (
    <div className='w-full border rounded-md flex items-center justify-start'>
      <img src={item.image_link_images} alt={item.s_cat} className='object-cover w-32 h-32' />
      <div className='px-4 flex items-center justify-between w-full'>
        <h3 className='text-xl font-semibold text-gray-700 flex-1'>{item.s_cat}</h3>
        <div className='flex items-center justify-between flex-1'>
          <div className='flex items-center justify-center gap-2'>
              <div onClick={incrementItem} className='flex items-center justify-center py-1 px-3 border rounded-md hover:scale-105 cursor-pointer'>
                  <FaPlus fill='black' size={15} />
              </div>
              <p className='text-gray-700'>{item.quantity}</p>
              <div onClick={decrementItem} className='flex items-center justify-center py-1 px-3 border rounded-md hover:scale-105 cursor-pointer'>
                  <FaMinus fill='black' size={15} />
              </div>
          </div>
          <h2 className='text-2xl font-semibold text-gray-700'>&#8377; {item.price * item.quantity}</h2>
        </div>
      </div>
    </div>
  )
}

export default CartItem

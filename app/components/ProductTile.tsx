'use client'
import React from 'react';
import Link from 'next/link';
import CustomButton from './CustomButton';
import { useCart } from '../context/CartContext';
import { CartItemInterface, ProductInterface } from '../interfaces';
import { FaStar } from 'react-icons/fa';

interface ProductTileProps {
    item: ProductInterface
}

const ProductTile: React.FC<ProductTileProps> = ({item}) => {

    const {addToCart} = useCart();

    const addToCartHandler = () => {
        addToCart({
            ...item,
            quantity: 1
        })
    }
  return (
      <div className="bg-white rounded-md flex flex-col items-center justify-between overflow-hidden border shadow-md">
        <Link href={`/product/${item.product_id}`}>
            <img src={item.image_link_images} alt={item.s_cat} className="h-[600px] object-cover" />
        </Link>
        <div className='w-full flex flex-col py-2 px-4 items-start justify-start gap-1'>
            <h2 className="text-2xl font-semibold text-gray-700 text-center self-center">{item.s_cat}</h2>
            <p className='text-xl text-black'>&#8377; {item.price}</p>
            <div className='py-1 px-3 text-lg bg-green-600 rounded-full flex items-center justify-center gap-1'>
              <p className='text-white'>{item.rating}</p>
              <FaStar fill='yellow' size={15} />
            </div>
            <CustomButton className='text-xl' onClick={addToCartHandler}>Add to cart</CustomButton>
        </div>
      </div>
  );
};

export default ProductTile;

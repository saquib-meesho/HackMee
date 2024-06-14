'use client'
import { useParams } from 'next/navigation';
import Link from 'next/link';
import React from 'react';
import {products} from '../../constants/products'
import CustomButton from '../components/CustomButton';
import { FaStar } from "react-icons/fa";
import { useCart } from '../context/CartContext';

const ProductDetail: React.FC = () => {
  const params = useParams();
  const {id} = params;

  const {addToCart} = useCart();

  const product = products[0];

    const addToCartHandler = () => {
        addToCart({
            ...product,
            quantity: 1
        })
    }

  return (
    <div className='flex items-start justify-center bg-gray-100 min-h-screen'>
    <div className="container mx-auto p-4 flex items-start justify-center">
      <div className="flex items-start justify-center w-[80%]">
        <img src={product.image_link_images} alt={product.s_cat} className="h-[600px] object-cover rounded-md mb-4" />
        <div className='flex-1 py-4 px-8'>
          <div className='flex flex-col items-start justify-start gap-1 border rounded-lg py-2 px-4'>
            <h1 className="text-2xl font-bold text-gray-700">{product.s_cat}</h1>
            <p className='text-xl text-gray-700'>&#8377; {product.price}</p>
            <div className='py-1 px-3 text-lg bg-green-600 rounded-full flex items-center justify-center w-16'>
              <p className='text-white'>{product.rating}</p>
              <FaStar fill='yellow' size={20} />
            </div>
          </div>
          <div className='flex items-center justify-between py-2 px-4'>
            <CustomButton onClick={addToCartHandler} className='text-xl'>Add to cart</CustomButton>
            <Link href={`/product/${id}/outfit`}>
              <CustomButton className='text-xl'>Generate Outfit</CustomButton>
            </Link>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ProductDetail;

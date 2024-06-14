'use client'
import React, { useState } from 'react'
import { useParams } from 'next/navigation';
import { products } from '@/constants/products';
import Recommend from '../components/Recommend';
import CustomButton from '../components/CustomButton';
import { useCart } from '../context/CartContext';
import { ProductInterface } from '../interfaces';

const Outfit = () => {

  const [lockedProducts, setLockedProducts] = useState<ProductInterface[]>();
    const params = useParams();
    const { id } = params;

    const {addToCart} = useCart();

    const addToCartHandler = () => {
      if(lockedProducts && lockedProducts.length !== 0) {
        lockedProducts?.map(async(prd) => {
          await addToCart({
            ...prd,
            quantity: 1
        })
        })
      }
        
    }
  
    // Replace this with actual product and outfit fetching logic
    const product = products[0]
    const outfits = products
  
    return (
      <div className='flex items-start justify-center w-full bg-gray-100 min-h-screen'>
      <div className="container mx-auto p-4">
        <div className="flex flex-col items-center">
          {/* Tops Category  */}
          <h1 className='text-xl text-gray-700 font-semibold'>Tops</h1>
        {product.major_category === 'Top' ? (
          <div className='flex flex-col items-center'>
            <img src={product.image_link_images} alt={product.s_cat} className="h-[400px] rounded-md mb-4" />
            <h1 className="text-2xl font-bold mb-4 text-gray-700">{product.s_cat}</h1>
          </div>
        ):
        (
        <Recommend setLockedProducts={setLockedProducts} outfits={outfits} />
        )}
          {/* Bottoms Category  */}
          <h1 className='text-xl text-gray-700 font-semibold'>Bottoms</h1>
          {product.major_category === 'Top' ? (
          <div className='flex flex-col items-center'>
            <img src={product.image_link_images} alt={product.s_cat} className="h-[400px] rounded-md mb-4" />
            <h1 className="text-2xl font-bold mb-4 text-gray-700">{product.s_cat}</h1>
          </div>
        ):
        (
        <Recommend setLockedProducts={setLockedProducts} outfits={outfits} />
        )}
        {/* Shoes Category  */}
        <h1 className='text-xl text-gray-700 font-semibold'>Footwears</h1>
        {product.major_category === 'Top' ? (
          <div className='flex flex-col items-center'>
            <img src={product.image_link_images} alt={product.s_cat} className="h-[400px] rounded-md mb-4" />
            <h1 className="text-2xl font-bold mb-4 text-gray-700">{product.s_cat}</h1>
          </div>
        ):
        (
        <Recommend setLockedProducts={setLockedProducts} outfits={outfits} />
        )}
        {/* Accessories Category  */}
        <h1 className='text-xl text-gray-700 font-semibold'>Accessories</h1>
        {product.major_category === 'Top' ? (
          <div className='flex flex-col items-center'>
            <img src={product.image_link_images} alt={product.s_cat} className="h-[400px] rounded-md mb-4" />
            <h1 className="text-2xl font-bold mb-4 text-gray-700">{product.s_cat}</h1>
          </div>
        ):
        (
        <Recommend setLockedProducts={setLockedProducts} outfits={outfits} />
        )}
        </div>
        <CustomButton onClick={addToCartHandler} className='text-xl'>Add to cart</CustomButton>
      </div>
      </div>
    );
}

export default Outfit

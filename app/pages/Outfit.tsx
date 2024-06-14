'use client'
import React, { useState } from 'react'
import { useParams } from 'next/navigation';
import { products } from '@/constants/products';

const Outfit = () => {
    const params = useParams();
    const { id } = params;

    const [lockedOutfit, setLockedOutfit] = useState<number | null>(null);

    const handleLockOutfit = (outfitId: number) => {
        setLockedOutfit(outfitId);
      };
  
    // Replace this with actual product and outfit fetching logic
    const product = products[0]
    const outfits = products
  
    return (
      <div className='flex items-start justify-center w-full bg-gray-100 min-h-screen'>
      <div className="container mx-auto p-4">
        <div className="flex flex-col items-center">
          <img src={product.image_link_images} alt={product.s_cat} className="h-[400px] rounded-md mb-4" />
          <h1 className="text-2xl font-bold mb-4 text-gray-700">{product.s_cat}</h1>
          <div className={`w-full flex space-x-4 ${lockedOutfit !== null ? 'overflow-hidden' : 'overflow-x-scroll'}`}>
          {outfits.map(outfit => (
            <div
              key={outfit.product_id}
              aria-disabled={lockedOutfit === outfit.product_id || lockedOutfit === null}
              className={`min-w-[300px] p-2 border rounded-lg ${lockedOutfit === outfit.product_id || lockedOutfit === null ? 'w-full h-auto' : 'opacity-40'} transition-all duration-300`}
            >
              <img
                src={outfit.image_link_images}
                alt={outfit.s_cat}
                className={`w-full h-[400px] object-cover rounded-md mb-2`}
              />
              <h2 className="text-lg font-semibold text-gray-700">{outfit.s_cat}</h2>
              {lockedOutfit === null && (
                <button
                  onClick={() => handleLockOutfit(outfit.product_id)}
                  className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg"
                >
                  Lock Selection
                </button>
              )}
            </div>
          ))}
        </div>
        </div>
      </div>
      </div>
    );
}

export default Outfit

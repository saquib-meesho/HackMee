import React, { useState } from 'react'
import { ProductInterface } from '../interfaces'

interface RecommendProps {
    outfits: ProductInterface[];
    setLockedProducts: React.Dispatch<React.SetStateAction<ProductInterface[] | undefined>>;
}

const Recommend = ({outfits, setLockedProducts} :RecommendProps) => {

    const [lockedOutfit, setLockedOutfit] = useState<ProductInterface | null>(null);

    const handleLockOutfit = (product: ProductInterface) => {
        setLockedOutfit(product);
        setLockedProducts((prev) => {
            if(prev) {
                return [...prev, product]
            }
            else {
                return [product]
            }
        });
      };
    
  return (
    <div className={`w-full flex space-x-4 mb-10 ${lockedOutfit !== null ? 'overflow-hidden' : 'overflow-x-scroll'}`}>
          {outfits.map(outfit => (
            <div
              key={outfit.product_id}
              aria-disabled={lockedOutfit?.product_id === outfit.product_id || lockedOutfit === null}
              className={`min-w-[300px] p-2 border rounded-lg ${lockedOutfit?.product_id === outfit.product_id || lockedOutfit === null ? 'w-full h-auto' : 'opacity-40'} transition-all duration-300`}
            >
              <img
                src={outfit.image_link_images}
                alt={outfit.s_cat}
                className={`w-full h-[400px] object-cover rounded-md mb-2`}
              />
              <h2 className="text-lg font-semibold text-gray-700">{outfit.s_cat}</h2>
              {lockedOutfit === null && (
                <button
                  onClick={() => handleLockOutfit(outfit)}
                  className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg"
                >
                  Lock Selection
                </button>
              )}
            </div>
          ))}
        </div>
  )
}

export default Recommend

'use client'
import React, { useEffect, useState } from 'react'
import ProductTile from '../components/ProductTile';
import {products} from '../../constants/products'
import { ProductInterface } from '../interfaces';

const HomePage = () => {

  const [product, setProduct] = useState<ProductInterface[]>([]);

  const fetchData = async () => {
    const req = await fetch('/api/inventory');
    const fetchData = await req.json()
    setProduct(fetchData.data);
  }

  useEffect(() => {
    fetchData();
    
  }, [])
  return (
    <div className="flex items-start justify-center w-full bg-gray-100 min-h-screen">
    <div className="mx-auto py-4 px-40">
      <h1 className="text-2xl font-bold mb-4 text-gray-700">Men's Clothing</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {product?.map(product => (
          <ProductTile key={product.product_id} item={product} />
        ))}
      </div>
    </div>
    </div>
  )
}

export default HomePage

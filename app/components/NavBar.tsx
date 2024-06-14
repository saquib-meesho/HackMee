'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'
import { FaShoppingCart } from "react-icons/fa";

const NavBar = () => {
  const path = usePathname();
  
  return (
    <div className='w-full h-20 bg-white flex items-center justify-between px-40 border-b'>
      <Link href={"/"} className='h-[80%]'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvgSygaz9_K6mrg8AHg58psiRF4RgdVyEybw&s" alt="logo" className='h-full' />
      </Link>
      {path !== '/cart' && <Link href={"/cart"}>
        <FaShoppingCart fill='black' size={30} className='cursor-pointer' />
      </Link>}
    </div>
  )
}

export default NavBar

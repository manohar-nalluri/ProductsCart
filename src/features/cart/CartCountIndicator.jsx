import React from 'react'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import { getCartCount } from './cartSlice'

const CartCountIndicator = () => {
  const count=useSelector(getCartCount)
  return (
    <Link href="/cart">
    <button type="button" class="relative flex m-2 items-center justify-center  border-black border  text-sm font-medium text-center text-black rounded-lg  ">
      <svg xmlns="http://www.w3.org/2000/svg" class="m-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
      <span class="sr-only">Notifications</span>
      <div class="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">{count}</div>
    </button>
    </Link>
  )
}

export default CartCountIndicator

"use client"
import CartCard from '@/features/cart/CartCard'
import { getCardItems, getCartTotal } from '@/features/cart/cartSlice'
import React from 'react'
import { useSelector } from 'react-redux'
import Link from 'next/link'

const CartPage = () => {
  const cartItems=useSelector(getCardItems)
  const total=useSelector(getCartTotal)
  return (
    <div class="font-sans max-w-4xl max-md:max-w-xl mx-auto p-4">
      <h1 class="text-2xl font-extrabold text-gray-800">Your Cart</h1>
      <div class="grid md:grid-cols-3 gap-4 mt-8">
        <div class="md:col-span-2 space-y-4">
          {cartItems.map((item)=>{
            return <CartCard item={item}/>
          })}
        </div>
        <div class="bg-white rounded-md px-4 py-6 h-max shadow-[0_2px_12px_-3px_rgba(6,81,237,0.3)]">
          <ul class="text-gray-800 space-y-4">
            <li class="flex flex-wrap gap-4 text-sm">Subtotal <span class="ml-auto font-bold">${total.toFixed(2)}</span></li>
            <li class="flex flex-wrap gap-4 text-sm">Shipping <span class="ml-auto font-bold">${total>0?2:0}</span></li>
            <hr class="border-gray-300" />
            <li class="flex flex-wrap gap-4 text-sm font-bold">Total <span class="ml-auto">${total>0?(total+2).toFixed(2):0}</span></li>
          </ul>
          <div class="mt-8 space-y-2">
            <button type="button" class="text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-gray-800 hover:bg-gray-900 text-white rounded-md">Buy Now</button>
            <Link href='/'><button type="button" class="text-sm mt-2 px-4 py-2.5 w-full font-semibold tracking-wide bg-transparent hover:bg-gray-100 text-gray-800 border border-gray-300 rounded-md">Continue Shopping  </button>
            </Link>
          </div>

          <div class="mt-4 flex flex-wrap justify-center gap-4">
          </div>
        </div>
      </div>
    </div>  )
}

export default CartPage

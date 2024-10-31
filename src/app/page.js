"use client"
import CartCountIndicator from "@/features/cart/CartCountIndicator";
import { fetchSavedCartItems } from "@/features/cart/cartSlice";
import Prod from "@/features/products/Prod";
import { fetchProducts, getProducts } from "@/features/products/productsSlice";
import { updateWishList } from "@/features/wishlist/wishListSlice";
import { socket, socketInit } from "@/features/wishlist/wishListSocket";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(fetchProducts())
    dispatch(fetchSavedCartItems())
  },[])

  useEffect(()=>{
    socketInit(dispatch)
    socket.current.on("whishlist", (data) => {
      dispatch(updateWishList(data))
    })
  },[])




  const products=useSelector(getProducts())
  return (
    <>
      <CartCountIndicator/>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-5">
        {products && products.map((product) => (
          <Prod key={product.id} product={product} />
        ))}
      </div>  
    </>
  )
}

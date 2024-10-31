import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
  cartItems: [],
}

export const fetchSavedCartItems=createAsyncThunk('cart/fetchSavedCartItems', async () => {
  const response = await fetch('http://localhost:8000/api/v1/cart')
  if(response.status===200){
  const data = await response.json()
  console.log('fetched data',data)
  return data
  }
})

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      let flag=false
      if (!state.cartItems.find((item) => item.id === action.payload.id)) {
        flag=true
        state.cartItems.push({ ...action.payload, quantity: 1 })
      }
      else{
        state.cartItems = state.cartItems.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, quantity: item.quantity + 1 }
          }
          return item
        })
      }
    },
    decrementQuantity(state,action){
      const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload);
      if (itemIndex !== -1) {
        if (state.cartItems[itemIndex].quantity === 1) {
          state.cartItems = state.cartItems.filter((item) => item.id !== action.payload);
        } else {
          state.cartItems[itemIndex].quantity -= 1;
        }
      }
    },
    removeFromCart(state, action) {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      )
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSavedCartItems.fulfilled, (state, action) => {
        state.cartItems = action.payload ||[]
      })
  },
})

export const getCartCount = (state) => {
  let count=0
  state.cart.cartItems.forEach((item) => {
    count += item.quantity
  })
  return count
}

export const getCartTotal = (state) => {
  let total=0
  state.cart.cartItems.forEach((item) => {
    total += item.price * item.quantity
  })
  return total
}

export const getCardItems = (state) => state.cart.cartItems

export const { addToCart, removeFromCart ,decrementQuantity} = cartSlice.actions
export default cartSlice.reducer

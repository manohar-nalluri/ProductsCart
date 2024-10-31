import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState={
  productsList: [],
}

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  const response = await fetch('https://fakestoreapi.com/products?limit=25')
  const data = await response.json()
  return data
})

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.productsList = action.payload
      })
  },
})

export const getProductsById=(id)=>(state)=>state.products.productsList.find(product=>product.id===id)
export const getProducts=()=>(state)=>state.products.productsList

export const { } = productsSlice.actions
export default productsSlice.reducer

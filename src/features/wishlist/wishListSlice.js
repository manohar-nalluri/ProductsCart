import { createSlice } from "@reduxjs/toolkit"

const initialState={
  wishList:[]
}

const wishListSlice = createSlice({
  name: 'wishList',
  initialState,
  reducers: {
    updateWishList(state,action){
      state.wishList=action.payload
    },
    addToWishList(state, action) {
      state.wishList.push(action.payload)
    },
    removeFromWishList(state, action) {
      state.wishList = state.wishList.filter(
        (item) => item.id !== action.payload
      )
    },
  },
})

export const { addToWishList, removeFromWishList,updateWishList } = wishListSlice.actions
export default wishListSlice.reducer

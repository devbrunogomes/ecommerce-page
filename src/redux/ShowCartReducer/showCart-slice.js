import { createSlice } from "@reduxjs/toolkit"


const initialState = {
  showCart: false //Ou seja, o carrinho não está sendo exibido
}

export const showCartSlice = createSlice({
  //Estado inicial:
  initialState,
  //Nome do Reducer:
  name: 'showCart',
  //cada reducer vai lidar com um action
  reducers: {
    toggleShowCart: (state, action) => {
      state.showCart = !state.showCart
    },
  }
})

export const {close, toggleShowCart} = showCartSlice.actions
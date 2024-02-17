import { createSlice } from "@reduxjs/toolkit"


const initialState = {
  isOpen: false //Ou seja, o carrinho não está sendo exibido
}

export const showCartSlice = createSlice({
  //Estado inicial:
  initialState,
  //Nome do Reducer:
  name: 'showCart',
  reducers: {
    open: (state, action) => {
      state.isOpen = true
    },
    close: (state, action) => {
      state.isOpen = false
    },
  }
})

export const {close, open} = showCartSlice.actions
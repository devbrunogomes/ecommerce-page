import { createSlice } from "@reduxjs/toolkit";

//Estado inicial que é um array de produtos vazio
const initialState = {
  cart: [],
};

export const cartSlice = createSlice({
  //Estado inicial do carrinho:
  initialState,

  //Nome do reducer:
  name: "cart",

  //Actions/Métodos
  reducers: {
    //Ação de adicionar um produto
    addProduct: (state, action) => {
      state.cart = [
        ...state.cart, //Essa linha é pra pegar tudo o que já estava no carrinho
        action.payload
      ]
    },
    //Ação de remover um produto
    removeProduct: (state, action) => {
      //Pra pegar o produto que vai ser removido
      const productToRemove = action.payload;
      //Criar um novo array sem o produto que quer ser removido
      const cartFiltered = state.cart.filter(
        (product) => product.id !== productToRemove.id
      );     

      state.cart = cartFiltered   
    },
    //Ação para Limpar o Carrinho
    clearCart: (state) => {
      state.cart = []
    }
  },
});


export const {addProduct, removeProduct, clearCart} = cartSlice.actions
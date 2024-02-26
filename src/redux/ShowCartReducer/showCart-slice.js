import { createSlice } from "@reduxjs/toolkit"; //Importar a funcao do toolkit

//Criando o estado inicial
const initialState = {
  showCart: false, //Ou seja, o carrinho não está sendo exibido
};

//Criando o slice (antigo reducer)
export const showCartSlice = createSlice({
  //Estado inicial:
  initialState,
  //Nome do Reducer:
  name: "showCart",
  //cada reducer vai lidar com uma action
  reducers: {
    toggleShowCart: (state, action) => {
      //Vai lá no estado inicial, e atribui ele um valor invertido dele mesmo.
      state.showCart = !state.showCart;
    },
  },
});

//exportar o método já desestruturado
export const { toggleShowCart } = showCartSlice.actions;

//Se nao fosse exportado assim eu teria que acessar com showCartSlice.actions.toggleShowCart

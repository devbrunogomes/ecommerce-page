import { combineReducers } from "redux";
import { cartReducer } from "./CartReducer/cart-reducer"; 
import { userSlice } from "./UserReducer/user-slice";
import { cartSlice } from "./CartReducer/cart-slice";

//Aqui vai ficar aninhado todos os Reducers. ***TODOS OS REDUCERS PRECISAM ESTAR AQUI OBRIGATORIAMENTE***
export const rootReducer = combineReducers({
  //Aqui dentro desse objeto eu passo todos os reducers usados na minha aplicação
  userReducer: userSlice.reducer,
  cartReducer: cartSlice.reducer,
});

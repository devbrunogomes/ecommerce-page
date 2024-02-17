import { combineReducers } from "redux";
import { userReducer } from "./UserReducer/reducer";
import { cartReducer } from "./CartReducer/cart-reducer"; 

//Aqui vai ficar aninhado todos os Reducers. ***TODOS OS REDUCERS PRECISAM ESTAR AQUI OBRIGATORIAMENTE***
export const rootReducer = combineReducers({
  //Aqui dentro desse objeto eu passo todos os reducers usados na minha aplicação
  userReducer,
  cartReducer,
});

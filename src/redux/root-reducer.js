import { combineReducers } from "redux";
import { userReducer } from "./UserReducer/reducer";

//Aqui vai ficar aninhado todos os Reducers
export const rootReducer = combineReducers({
  //Aqui dentro desse objeto eu passo todos os reducers usados na minha aplicação
  userReducer,
});

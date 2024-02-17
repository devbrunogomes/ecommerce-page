//Os slices sao os novos reducers
import { createSlice } from "@reduxjs/toolkit";

//estado inicial pra quando a aplicacao inicar. ***TODO ESTADO INICIAL É UM OBJETO***
const initialState = {
  user: null, //Ou seja, o usuario nao está logado inicialmente
};

export const userSlice = createSlice({
  //O estado inical, que é a const declarada acima:
  initialState,
  //O nome do reducer que estamos criando
  name: "user",
  //Os reducers são as novas actions
  reducers: {
    //dentro do objeto a gente coloca os métodos, que sao as actions que serao disparadas. Substituindo assim o parametro 'type'
    //1a Action cadastrada: LOGIN
    login: (state, action) => {
      state.user = action.payload;
    },
    //2a Action cadastrada: LOGOUT
    logout: (state, action) => {
      state.user = null;
    },
  },
});


export const {login, logout} = userSlice.actions
//Reducer: guarda o estado que desejamos compartilhar na aplicação
//e tbm manipula/altera o estado.

//Estado para guardar as informaçoes do usuário

//estado inicial pra quando a aplicacao inicar. ***TODO ESTADO INICIAL É UM OBJETO***
const initialState = {
  user: null,
};

//Funçao para alterar o estado acima. Ela que vai ser importado no root
export function userReducer(state = initialState, action) {
  //TODO REDUCER PRECISA RETORNAR O NOSSO ESTADO ATUALIZADO
  //Se a açao for de login, o retorno vai ser com as infos passadas no payload
  if (action.type === "user/login") {
    return {
      ...state,
      user: action.payload,
    };

    //Se a açao for de logout, voltar para o estado null
  } else if (action.type === "user/logout") {
    return {
      ...state,
      user: null,
    };
  }

  return state;
}

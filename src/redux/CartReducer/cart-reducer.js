//Estado inicial que é um array de produtos vazio
const initialState = {
  cart: [],
};

//A funçao que vai lidar com a mudança de estado
export function cartReducer(state = initialState, action) {
  //switch pra lidar com os diferentes action.type
  switch (action.type) {
    case "cart/add-product":
      return {
        ...state,
        cart: [
          ...state.cart, //pra trazer tudo que já está lá no carrinho
          action.payload, //pra adicionar algo ao carrinho
        ],
      }      
      ;
    case "cart/remove-product":
      //Pra pegar o produto que vai ser removido
      const productToRemove = action.payload;
      //Criar um novo array sem o produto que quer ser removido
      const cartFiltered = state.cart.filter(
        (product) => product.id !== productToRemove.id
      );

      return {
        ...state,
        cart: cartFiltered,
      };

    default:
      return state;
  }

}

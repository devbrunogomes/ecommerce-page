//A janela do Carrinho que vai abrir lateralmente
import { useSelector } from "react-redux";
import * as S from "./styles";

export const Cart = (props) => {
  //Trazer o estado do carrinho de dentro do reducer
  const { cart } = useSelector((rootReducer) => rootReducer.cartReducer);

  //Variavel para armazenar o total do carrinho
  const total = cart.reduce((totalCart, product) => {
    return totalCart + product.price
  }, 0)

  return (
    <S.Conteiner showCart={props.showCart}>
      <S.Title>Carrinho</S.Title>

      <S.CartProductsList>
        {/* Renderização condicionada a cada item do carrinho */}
        {cart.map((product) => {
          return (
            <S.CartProductItem key={product.id}>
              <strong>{product.title}</strong> - ${product.price}
            </S.CartProductItem>
          );
        })}
      </S.CartProductsList>

      <S.CartTotal>
        Total: ${total}
      </S.CartTotal>
    </S.Conteiner>
  );
};

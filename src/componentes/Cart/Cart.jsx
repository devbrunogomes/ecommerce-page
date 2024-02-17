//A janela do Carrinho que vai abrir lateralmente
import { useDispatch, useSelector } from "react-redux";
import * as S from "./styles";
import { IoMdRemoveCircle } from "react-icons/io";
import { removeProduct } from "../../redux/CartReducer/cart-slice";
import { IoCloseSharp } from "react-icons/io5";
import { toggleShowCart } from "../../redux/ShowCartReducer/showCart-slice";

export const Cart = (props) => {
  //Trazer o estado do carrinho de dentro do reducer
  const { cart } = useSelector((rootReducer) => rootReducer.cartReducer);

  //Variavel para armazenar o total do carrinho
  const total = cart.reduce((totalCart, product) => {
    return totalCart + product.price;
  }, 0);
  const totalFixed = total.toFixed(2);

  const dispatch = useDispatch();

  return (
    <S.Conteiner showCart={props.showCart}>
      <S.TitleAndCloseButtonWrapper>
        <S.Title>Carrinho</S.Title>
        <S.CloseCart onClick={() => {dispatch(toggleShowCart({}))}}>
          <IoCloseSharp />
        </S.CloseCart>
      </S.TitleAndCloseButtonWrapper>

      <S.CartProductsList>
        {/* Renderização condicionada a cada item do carrinho */}
        {cart.map((product) => {
          return (
            <S.CartProductItem key={product.id}>
              <S.TitleAndPriceWrapper>
                <S.ItemTitle>{product.title}</S.ItemTitle> ${product.price}
              </S.TitleAndPriceWrapper>

              <S.RemoveItemFromCart
                onClick={() => dispatch(removeProduct(product))}
              >
                <IoMdRemoveCircle />
              </S.RemoveItemFromCart>
            </S.CartProductItem> 
          );
        })}
      </S.CartProductsList>

      <S.CartTotal>
        Total: <strong>${totalFixed}</strong>
      </S.CartTotal>
    </S.Conteiner>
  );
};

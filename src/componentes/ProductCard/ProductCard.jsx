import * as S from "./styles.js";
import { FiShoppingCart } from "react-icons/fi";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";

export const ProductCard = ({ id, image, description, title, rate, price }) => {
  //Pra trazer o estado do carrinho
  const { cart } = useSelector((rootReducer) => rootReducer.cartReducer);
  //Para despachar as actions
  const dispatch = useDispatch();

  //Variavel pra procurar um produto no carrinho e me retornar um true ou false
  const isProductOnCart =
    cart.find((productOnCart) => id === productOnCart.id) !== undefined;

  //------------------------------------------------------------------------------

  //Funçao para lidar com o click no botao de adicionar ao carrinho
  function handleAddProductToCart() {
    //despachar a action de adicionar ao carrinho
    dispatch({
      type: "cart/add-product",
      payload: { id, image, description, title, rate, price },
    });
  }

  //------------------------------------------------------------------------------
  //Funçao para lidar com o click no botao de remover ao carrinho
  function handleRemoveProductFromCart() {
    dispatch({
      type: "cart/remove-product",
      payload: { id, image, description, title, rate, price },
    });
  }

  //------------------------------------------------------------------------------
  return (
    <S.Card>
      <S.ProductImage src={image} alt={description} />

      <S.ProductTitle>{title}</S.ProductTitle>

      <S.ReviewPriceContainer>
        <S.Review>
          {Array.from({ length: 5 }).map((_, index) =>
            index < Math.round(rate) ? (
              <AiFillStar key={index} />
            ) : (
              <AiOutlineStar key={index} />
            )
          )}
          ({rate})
        </S.Review>

        <S.Price>${price}</S.Price>
      </S.ReviewPriceContainer>

      <S.AddToCartButtonWrapper>
        {isProductOnCart ? (
          <S.RemoveFromCartButton onClick={handleRemoveProductFromCart}>
            Remover do Carrinho <FiShoppingCart />
          </S.RemoveFromCartButton>
        ) : (
          <S.AddToCartButton onClick={handleAddProductToCart}>
            Adcionar ao Carrinho <FiShoppingCart />
          </S.AddToCartButton>
        )}
      </S.AddToCartButtonWrapper>
    </S.Card>
  );
};

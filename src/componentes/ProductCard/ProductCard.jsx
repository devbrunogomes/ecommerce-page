import * as S from "./styles.js";
import { FiShoppingCart } from "react-icons/fi";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

export const ProductCard = ({ image, description, title, rate, price }) => {
  return (
    <S.Card>
      <S.ProductImage src={image} alt={description} />

      <S.ProductTitle>{title}</S.ProductTitle>

      <S.ReviewPriceContainer>
        <S.Review>
          {Array.from({ length: 5 }).map((_, index) =>
            index < Math.round(rate) ? <AiFillStar key={index}/> : <AiOutlineStar key={index}/>
          )}
          ({rate})
        </S.Review>

        <S.Price>${price}</S.Price>
      </S.ReviewPriceContainer>

      <S.AddToCartButtonWrapper>
        <S.AddToCartButton>
          Adcionar ao Carrinho <FiShoppingCart />
        </S.AddToCartButton>
      </S.AddToCartButtonWrapper>
    </S.Card>
  );
};

import * as S from "./styles.js";
import {  FiShoppingCart } from "react-icons/fi";

export const ProductCard = () => {
  return (
    <S.Card>
      <S.ProductImage src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg" alt="" />

      <S.ProductTitle>Mens Casual Premium Slin Fit</S.ProductTitle>

      <S.ReviewPriceContainer>
        <S.Review>4.1</S.Review>

        <S.Price>$22.3</S.Price>
      </S.ReviewPriceContainer>

      <S.AddToCartButton>Adcionar ao Carrinho <FiShoppingCart /></S.AddToCartButton>
    </S.Card>
  );
};

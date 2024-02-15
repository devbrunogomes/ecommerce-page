import * as S from "./styles";
import { FiLogIn, FiLogOut, FiShoppingCart } from "react-icons/fi";

export const Header = () => {
  return (
    <S.StyledHeader>
      <S.Wrapper>
        <S.HeaderTitle>My Shop</S.HeaderTitle>

        <S.ButtonsWrapper>
          <S.AuthButton>
            Login
            <FiLogIn />
          </S.AuthButton>

          <S.CartButton>
            Carrinho 
            <FiShoppingCart />
          </S.CartButton>
        </S.ButtonsWrapper>
      </S.Wrapper>
    </S.StyledHeader>
  );
};

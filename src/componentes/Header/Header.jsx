import * as S from "./styles";
import { FiLogIn, FiLogOut, FiShoppingCart } from "react-icons/fi";

export const Header = () => {
  //Estado para controlar a exibição do carrinho


  const isLogged = true;

  return (
    <S.StyledHeader>
      <S.Wrapper>
        <S.HeaderTitle>My Shop.</S.HeaderTitle>

        <S.ButtonsWrapper>
          {/* //Pra poder controlar um estilo dinamicamente, eu crio um
          um atributo HTML qualquer, o que vai ser recebino no arquivo styles como uma propriedade da variavel. */}
          <S.AuthButton isLogged={isLogged}>
            {isLogged ? "Logout" : "Login"}
            {isLogged ? <FiLogOut /> : <FiLogIn />}
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

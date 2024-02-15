import { useState } from "react";
import * as S from "./styles";
import { FiLogIn, FiLogOut, FiShoppingCart } from "react-icons/fi";
import { Cart } from "../Cart/Cart";

export const Header = () => {
  //Estado para controlar a exibição do carrinho
  const [showCart, setShowCart] = useState(false);

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

          <S.CartButton
            //Ao clicar no botao, um toggle vai ser acionado, pra exibir ou esconder uma aba lateral
            onClick={() => {
              setShowCart(!showCart);
            }}
          >
            Carrinho
            <FiShoppingCart />
          </S.CartButton>
        </S.ButtonsWrapper>
      </S.Wrapper>
      {/* Vou passar uma propriedade pra esse componente, com o valor da minha variavel.  */}
      <Cart showCart={showCart}/>
    </S.StyledHeader>
  );
};

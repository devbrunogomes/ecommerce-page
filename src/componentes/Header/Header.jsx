import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as S from "./styles";
import { FiLogIn, FiLogOut, FiShoppingCart } from "react-icons/fi";
import { Cart } from "../Cart/Cart";
import { login, logout } from "../../redux/UserReducer/user-slice";
import { toggleShowCart } from "../../redux/ShowCartReducer/showCart-slice";

export const Header = () => {
  //o useSelector é a forma que eu acesso um reducer. Eu tenho que passar uma funçao, com o rootReducer como parametro.
  //E dentro dele vai ter os reducers que eu criei
  const { user } = useSelector((rootReducer) => rootReducer.userReducer);
  //Const para armazenar o estado isOpen
  const { showCart } = useSelector(
    (rootReducer) => rootReducer.showCartReducer
  );
  //Hook para enviar uma action
  const dispatch = useDispatch(); //Com o toolkit o dispatch nao muda, o que vai mudar é a forma que usamos ele
  //const que armazena a info se tem ou nao um usuario logado
  const isLogged = user !== null;

  //------------------------------------------------------------------------
  //Funçao para lidar com o clique no botao de login/logout
  function handleUserAuth() {
    //se usuário nao está logado. o user será null (como informado lá no reducer)
    if (user === null) {
      //despachar uma action de login. Como parametro eu passo um objeto com duas props: type e payload
      dispatch(
        login({
          payload: {
            name: "Bruno Gomes",
            email: "brunogomes@email.com",
          },
        })
      );
    } else {
      dispatch(logout({}));
    }
  }

  //------------------------------------------------------------------------
  return (
    <S.StyledHeader>
      <S.Wrapper>
        <S.HeaderTitle>For You.</S.HeaderTitle>

        <S.ButtonsWrapper>
          {/* //Pra poder controlar um estilo dinamicamente, eu crio um
          um atributo HTML qualquer, o que vai ser recebino no arquivo styles como uma propriedade da variavel. */}
          <S.AuthButton isLogged={isLogged} onClick={handleUserAuth}>
            {/* Aqui eu to passando o conteudo do botao de acordo com o status que é setado pela variavel */}
            {isLogged ? "Logout" : "Login"}
            {isLogged ? <FiLogOut /> : <FiLogIn />}
          </S.AuthButton>

          <S.CartButton
            //Ao clicar no botao, um toggle vai ser acionado, pra exibir ou esconder uma aba lateral
            onClick={() => {
              //setShowCart(!showCart)
              dispatch(toggleShowCart({}));
            }}
          >
            Carrinho
            <FiShoppingCart />
          </S.CartButton>
        </S.ButtonsWrapper>
      </S.Wrapper>
      {/* Vou passar uma propriedade pra esse componente, com o valor da minha variavel.  */}
      <Cart showCart={showCart} />
    </S.StyledHeader>
  );
};

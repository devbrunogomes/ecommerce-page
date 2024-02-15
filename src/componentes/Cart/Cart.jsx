//A janela do Carrinho que vai abrir lateralmente
import * as S from "./styles"

export const Cart = (props) => {
  return (
    
    <S.Conteiner showCart={props.showCart}>
      <S.Title>Carrinho</S.Title>
    </S.Conteiner>
  )
}
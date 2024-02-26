import styled from "styled-components";

export const Conteiner = styled.aside`
  position: fixed;
  top: 0;
  left: ${(props) => (props.showCart ? "0" : "-35rem")};
  height: 100vh;
  width: 30rem;
  background-color: white;
  z-index: 999;
  padding: 2rem;
  box-shadow: -5px 0 1.5rem rgba(0, 0, 0, 0.25);
  transition: 0.6s ease;
  overflow: auto;
`;

export const TitleAndCloseButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Title = styled.h1`
  font-size: 3rem;
`;

export const CloseCart = styled.a`
  display: flex;
  align-items: center;
  border: none;
  cursor: pointer;

  svg {
    font-size: 1.9rem;
  }
`

export const CartProductsList = styled.ul`
  padding: 2rem 0;
  list-style: none;

  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const CartProductItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TitleAndPriceWrapper = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`

export const ItemTitle = styled.strong`
  font-size: 1.3rem;
`;

export const RemoveItemFromCart = styled.a`
  display: flex;
  align-items: center;
  border: none;
  cursor: pointer;

  svg {
    font-size: 1.5rem;
  }
`;

export const CartTotal = styled.h3`
  font-size: 2rem;
  display: flex;
  justify-content: space-between;
`;

export const ClearCartButton = styled.button`
  display: ${(props) => (props.total > 0 ? "flex" : "none")};
  align-items: center;
  justify-content: space-evenly;
  padding: 0 1rem;
  width: 100%;
  margin-top: 1rem ;
  background-color: white;
  border-radius: 0.6rem;
  font-size: 1.4rem;
`

import styled from "styled-components";

export const Conteiner = styled.aside`
  position: fixed;
  top: 0;
  left: ${(props) => (props.showCart ? "0" : "-35rem")};
  height: 100vh;
  width: 30rem;
  background-color: white;

  padding: 2rem;
  box-shadow: -5px 0 1.5rem rgba(0, 0, 0, 0.25);

  transition: 0.6s ease;
`;

export const Title = styled.h1`
  font-size: 3rem;
`;

import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: navy;
`;

//Esse nome 'Wrapper' é usado para definir algo que vai envolver outras coisas
export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 2rem;
  height: 3rem;
`;

export const HeaderTitle = styled.h1`
  color: white;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

export const AuthButton = styled.button`
  border: none;
  border-radius: 0.6rem;
  height: 2.5rem;
  padding: 0 1rem;
  background-color: green;
  color: white;
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  //Para acessar o icone trazido da lib, eu aninho um svg, já que no html, esse incone é um svg
  svg {
    font-size: 1rem;
  }
`;

export const CartButton = styled.button`
  border: none;
  border-radius: 0.6rem;
  height: 2.5rem;
  padding: 0 1rem;
  background-color: violet;
  color: black;
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  //Para acessar o icone trazido da lib, eu aninho um svg, já que no html, esse incone é um svg
  svg {
    font-size: 1rem;
  }
`;

import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: #19747E;
  position: fixed;
  top: 0;
  width: 100%;

`;

//Esse nome 'Wrapper' é usado para definir algo que vai envolver outras coisas
export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 8rem;
  height: 4.5rem;

  @media screen and (max-width: 495px) {    
    padding: 0 1rem ;
  }
`;

export const HeaderTitle = styled.h1`
  color: white;
  font-size: 3rem;

  @media screen and (max-width: 495px) {    
      font-size: 2rem;    
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

export const AuthButton = styled.button`
  border: none;
  border-radius: 0.6rem;
  height: 2.7rem;
  padding: 0 1rem;
  background-color: ${(props) => props.isLogged ? '#CB997E' : '#D1E8E2'};
  color: black;
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  //Para acessar o icone trazido da lib, eu aninho um svg, já que no html, esse incone é um svg
  svg {
    font-size: 1.4rem;
  }
`;

export const CartButton = styled.button`
  border: none;
  border-radius: 0.6rem;
  height: 2.7rem;
  padding: 0 1rem;
  background-color: #A9D6E5;
  color: black;
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  //Para acessar o icone trazido da lib, eu aninho um svg, já que no html, esse incone é um svg
  svg {
    font-size: 1.4rem;
  }
`;

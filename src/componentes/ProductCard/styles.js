import styled from "styled-components";

export const Card = styled.article`
  background-color: white;
  width: 100%;

  padding: 2rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;

export const ProductImage = styled.img`
  width: 20rem;
  height: 40rem;

  //O object-fit é mto bom para lidar com imagens distorcidas.
  //Como ela vai lidar com um tamanho especifico, a gente
  //precisa definir as medidas que a gente quer que ela se ajuste
  object-fit: contain;
`;

export const ProductTitle = styled.h2`
  font-weight: 500;
  font-size: 1.2rem;
  margin-top: 1rem;
  min-height: 4rem;
`;

export const ReviewPriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 1rem;
`;

export const Review = styled.span`
  display: flex;
  align-items: center;

  svg {
    font-size: 1.2rem;
  }
`;

export const Price = styled.strong`
  font-size: 1.3rem;
`;

export const AddToCartButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  width: 100%;
`;

export const AddToCartButton = styled.button`
  border: none;
  border-radius: 0.6rem;
  height: 2.5rem;
  background-color: #a9d6e5;
  color: black;
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;

  //Para acessar o icone trazido da lib, eu aninho um svg, já que no html, esse incone é um svg
  svg {
    font-size: 1rem;
  }
`;

export const RemoveFromCartButton = styled.button`
  border: none;
  border-radius: 0.6rem;
  height: 2.5rem;
  background-color: #c4c5ba;
  color: black;
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  

  //Para acessar o icone trazido da lib, eu aninho um svg, já que no html, esse incone é um svg
  svg {
    font-size: 1rem;
  }
`;

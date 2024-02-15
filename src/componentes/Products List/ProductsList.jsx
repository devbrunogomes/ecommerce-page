import { ProductCard } from "../ProductCard/ProductCard.jsx";
import * as S from "./styles.js";
import { products } from "../../data/products";

export const ProductsList = () => {
  //Eu peguei os dados da API, porem eu poderia usar o useEffect() para fazer a requisicao na API

  return (
    <S.Container>
      {products.map((item) => {
        return (
          <ProductCard
            key={item.id}
            image={item.image}
            description={item.description}
            title={item.title}
            rate={item.rating.rate}
            price={item.price}
          />
        );
      })}
    </S.Container>
  );
};

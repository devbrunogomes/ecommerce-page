
import { Header } from "./componentes/Header/Header";
import { ProductsList } from "./componentes/Products List/ProductsList";
import { GlobalStyles } from "./styles/GlobalStyles";



function App() {
  return (
    <>     
      <Header/>

      <ProductsList/>
      {/* Aqui eu importo para o App os estilos globais */}
      <GlobalStyles />
    </>
  );
}

export default App;

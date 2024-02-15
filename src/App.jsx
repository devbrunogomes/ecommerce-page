
import { Header } from "./componentes/Header/Header";
import { ProductCard } from "./componentes/ProductCard/ProductCard";
import { GlobalStyles } from "./styles/GlobalStyles";



function App() {
  return (
    <>     
      <Header/>

      <ProductCard/>
      {/* Aqui eu importo para o App os estilos globais */}
      <GlobalStyles />
    </>
  );
}

export default App;


import { Provider } from "react-redux";
import { Header } from "./componentes/Header/Header";
import { ProductsList } from "./componentes/Products List/ProductsList";
import { GlobalStyles } from "./styles/GlobalStyles";
import { store } from "./redux/store";



function App() {
  return (
    //A propriedade store precisa ser passada para o Provider. Ela é um arquivo a parte que importa o proprio root
    <Provider store={store}>     
      <Header/>

      <ProductsList/>
      {/* Aqui eu importo para o App os estilos globais */}
      <GlobalStyles />
    </Provider>
  );
}

export default App;

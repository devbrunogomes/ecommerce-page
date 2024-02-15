
import { Header } from "./componentes/Header/Header";
import { GlobalStyles } from "./styles/GlobalStyles";



function App() {
  return (
    <>     
      <Header/>
      {/* Aqui eu importo para o App os estilos globais */}
      <GlobalStyles />
    </>
  );
}

export default App;

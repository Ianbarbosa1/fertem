import { Categoria } from "./assets/componentes/categorias";
import { Footer } from "./assets/componentes/footer";
import { Fornecedores } from "./assets/componentes/fornecedores";
import { Orcamento } from "./assets/componentes/orcamento";
function App() {
  return (
    <>
      <header id="home">
        <Categoria />
      </header>

      <main>
        <Fornecedores/>

        <Orcamento/>
      </main> 

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;

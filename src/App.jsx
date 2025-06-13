import { Categoria } from "./assets/componentes/categorias";
import { Footer } from "./assets/componentes/footer";
import { Fornecedores } from "./assets/componentes/fornecedores";

function App() {
  return (
    <>
      <header id="home">
        <Categoria/>
      </header>

      <main>
        <Fornecedores/>
      </main> 

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;

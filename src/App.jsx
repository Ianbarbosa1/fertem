import { Entrada } from "./assets/componentes/entrada";
import { Footer } from "./assets/componentes/footer";
import { Produtos } from "./assets/componentes/produtos";


function App() {
  return (
    <>
      <header id="home">
        <Entrada />
      </header>

      <main id="produtos">
        <Produtos />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;

import { Entrada } from "./assets/componentes/entrada"
import { Footer } from "./assets/componentes/footer"
import { Produtos } from "./assets/componentes/produtos"
import { Promocoes } from "./assets/componentes/promocoes"

function App() {

  return (
    <>
      <header>
        <Entrada/>
      </header>

      <main>
        <Promocoes/>

        <Produtos/>
      </main>
      
      <footer> 
        <Footer/>
      </footer>
    </>
  )
}

export default App

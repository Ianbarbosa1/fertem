import { Entrada } from "./assets/componentes/entrada";
import { Footer } from "./assets/componentes/footer";
import { Produtos } from "./assets/componentes/produtos";


/*ICONES*/
import { BsBoxes } from "react-icons/bs";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";

/*IMAGENS*/
import logo from "./assets/imagens/logo-sem-fundo.png";

let horas = new Date();
let dia = horas.getDay();
let hora = horas.getHours();

function funcionamento() {
    

  if (
    (hora >= 8 && hora <= 18 && dia >= 1 && dia <= 6) ||
    (hora >= 8 && hora <= 13 && dia == 0)
  ) {
    return true;
  } else {
    return false;
  }
}

let estilo = "";
let retorno = funcionamento();
if (retorno === true) {
  retorno = "Aberto";
  estilo = {
    backgroundColor: "rgba(153, 255, 0, 0.671)",
  };
} else {
  retorno = "Fechado";
  estilo = {
    backgroundColor: "tomato",
  };
}

function App() {
  return (
    <>
      <section className="menu">
        <a href="#home">
          <img src={logo} alt="Logo Fertem" />
        </a>

        <nav className="links">
          <a href="#produtos" title="Produtos">
            <BsBoxes />
            <small>Produtos</small>
          </a>

          <a
            href="https://maps.app.goo.gl/EhaDchrhHiLp9Upe8"
            target="_blank"
            title="Localização"
          >
            <FaMapLocationDot />
            <small>Localização</small>
          </a>

          <a href="" title="orçamento">
            <FaShoppingCart />
            <small>Orçamento</small>
          </a>
        </nav>

        <p
          title="Funcionamento da Loja Fisica"
          style={estilo}
          className="observador"
        >
          {retorno}
        </p>

        <p className="menu-hamburguer" title="Categorias">
          <IoMenu />
        </p>
      </section>

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

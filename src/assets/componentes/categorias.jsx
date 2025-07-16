import Dados from "../produtos-valores.json";
import { useState } from "react";
import { Banners } from "./banners";

/*ICONES*/
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

/*IMAGENS*/
import logo from "../imagens/logo-sem-fundo.png";
import lupa from "../imagens/pesquisa.svg";;

/*FUNCIONAMENTO DA LOJA FISICA*/
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

export function Categoria() {
  /*FUNÇÃO DE PESQUISA*/
  const [busca, setBusca] = useState("");
  const buscaM = busca.toLowerCase();
  const produtos = Dados.filter(
    (produto) =>
      produto.nome.toLowerCase().includes(buscaM)
  );

  /*FUNÇÃO DE DETALHE DO PRODUTO*/
  const [detalhe, setDetalhe] = useState([]);
  const [fechar, setFechar] = useState(false);
  const detalheProduto = (Produto) => {
    setDetalhe([{ ...Produto }]);
    setFechar(true);
  };

  function openCategories() {
    let modal = document.querySelector("#menu-tel");
    modal.style.display = "flex";
  }
  function closeCategories() {
    let modal = document.querySelector("#menu-tel");
    modal.style.display = "none";
  }

  let [mostrou1, setMostrou1] = useState(false);
  let [mostrou2, setMostrou2] = useState(false);
  let [mostrou3, setMostrou3] = useState(false);
  let [mostrou4, setMostrou4] = useState(false);
  let [mostrou5, setMostrou5] = useState(false);
  let [mostrou6, setMostrou6] = useState(false);
  let [mostrou7, setMostrou7] = useState(false);
  let [mostrou8, setMostrou8] = useState(false);
  let [mostrou9, setMostrou9] = useState(false);

  function primeiraCategoria() {
    setMostrou1(true);
  }
  function segundaCategoria() {
    setMostrou2(true);
  }
  function terceiraCategoria() {
    setMostrou3(true);
  }
  function quartaCategoria() {
    setMostrou4(true);
  }
  function quintaCategoria() {
    setMostrou5(true);
  }
  function sextaCategoria() {
    setMostrou6(true);
  }
  function setimaCategoria() {
    setMostrou7(true);
  }
  function oitavaCategoria() {
    setMostrou8(true);
  }
  function nonaCategoria() {
    setMostrou9(true);
  }

  function fechou() {
    setMostrou1(false);
    setMostrou2(false);
    setMostrou3(false);
    setMostrou4(false);
    setMostrou5(false);
    setMostrou6(false);
    setMostrou7(false);
    setMostrou8(false);
    setMostrou9(false);
  }

  return (
    <>
      {/*MENU*/}
      <section className="menu">
        <a href="#home">
          <img src={logo} alt="Logo Fertem" className="logo" />
        </a>

        <nav className="links">
          <input
            type="text"
            placeholder="Qual produto deseja encontrar?"
            className="pesquisa"
            value={busca}
            onChange={(ev) => setBusca(ev.target.value)}
          />

          <img src={lupa} alt="" className="lupa" />
        </nav>

        <p
          title="Funcionamento da Loja Fisica"
          style={estilo}
          className="observador">
          {retorno}
        </p>

        <p
          className="menu-hamburguer"
          title="Categorias"
          onClick={openCategories}>
          <IoMenu />
        </p>
      </section>

      {/*CATEGORIAS*/}
      <section className="produto-categoria">
        {mostrou1 && (
          <section className="modal">
            <div className="fechar-modal" onClick={fechou}>
              <IoClose/>
              Fechar Modal
            </div>
            
            <div className="container-produtos">
              <nav className="title">
                <h1>MAQUINAS</h1>
              </nav>

              <section className="all-produtos">
                {Dados.map((post) => {
                  if (post.categoria == 1) {
                    return (
                      <>
                        <div
                          className="product"
                          key={post.id}
                          title={post.nome}
                        >
                          <nav>
                            <img src={post.imagem} alt={post.nome} />
                          </nav>
                          <h2>{post.nome}</h2>
                          <h3>Cód: {post.id}</h3>
                          <p>
                            <span>R$</span> {post.valor}
                          </p>
                          <div className="botao">
                            <button onClick={() => detalheProduto(post)}> Sobre </button>
                          </div>
                        </div>
                      </>
                    );
                  }
                })}
              </section>
            </div>
          </section>
        )}

        {mostrou2 && (
          <section className="modal">
            <div className="fechar-modal" onClick={fechou}>
              <IoClose/>
              Fechar Modal
            </div>
            <div className="container-produtos">
              <h1>DECORAÇÃO</h1>

              <section className="all-produtos">
                {Dados.map((post) => {
                  if (post.categoria == 2) {
                    return (
                      <>
                        <div
                          className="product"
                          key={post.id}
                          title={post.nome}
                        >
                          <nav>
                            <img src={post.imagem} alt={post.nome} />
                          </nav>
                          <h2>{post.nome}</h2>
                          <h3>Cód: {post.id}</h3>
                          <p>
                            <span>R$</span> {post.valor}
                          </p>
                          <div className="botao">
                            <button onClick={() => detalheProduto(post)}> Sobre </button>
                          </div>
                        </div>
                      </>
                    );
                  }
                })}
              </section>
            </div>
          </section>
        )}

        {mostrou3 && (
          <section className="modal">
            <div className="fechar-modal" onClick={fechou}>
              <IoClose/>
              Fechar Modal
            </div>
            <div className="container-produtos">
              <h1>FERRAMENTAS</h1>

              <section className="all-produtos">
                {Dados.map((post) => {
                  if (post.categoria == 3) {
                    return (
                      <>
                        <div
                          className="product"
                          key={post.id}
                          title={post.nome}
                        >
                          <nav>
                            <img src={post.imagem} alt={post.nome} />
                          </nav>
                          <h2>{post.nome}</h2>
                          <h3>Cód: {post.id}</h3>
                          <p>
                            <span>R$</span> {post.valor}
                          </p>
                          <div className="botao">
                            <button onClick={() => detalheProduto(post)}> Sobre </button>
                          </div>
                        </div>
                      </>
                    );
                  }
                })}
              </section>
            </div>
          </section>
        )}

        {mostrou4 && (
          <section className="modal">
            <div className="fechar-modal" onClick={fechou}>
              <IoClose/>
              Fechar Modal
            </div>
            <div className="container-produtos">
              <h1>ARGAMASSAS</h1>

              <section className="all-produtos">
                {Dados.map((post) => {
                  if (post.categoria == 4) {
                    return (
                      <>
                        <div
                          className="product"
                          key={post.id}
                          title={post.nome}
                        >
                          <nav>
                            <img src={post.imagem} alt={post.nome} />
                          </nav>
                          <h2>{post.nome}</h2>
                          <h3>Cód: {post.id}</h3>
                          <p>
                            <span>R$</span> {post.valor}
                          </p>
                          <div className="botao">
                            <button onClick={() => detalheProduto(post)}> Sobre </button>
                          </div>
                        </div>
                      </>
                    );
                  }
                })}
              </section>
            </div>
          </section>
        )}

        {mostrou5 && (
          <section className="modal">
            <div className="fechar-modal" onClick={fechou}>
              <IoClose/>
              Fechar Modal
            </div>
            <div className="container-produtos">
              <h1>ILUMINAÇÃO</h1>

              <section className="all-produtos">
                {Dados.map((post) => {
                  if (post.categoria == 5) {
                    return (
                      <>
                        <div
                          className="product"
                          key={post.id}
                          title={post.nome}
                        >
                          <nav>
                            <img src={post.imagem} alt={post.nome} />
                          </nav>
                          <h2>{post.nome}</h2>
                          <h3>Cód: {post.id}</h3>
                          <p>
                            <span>R$</span> {post.valor}
                          </p>
                          <div className="botao">
                            <button onClick={() => detalheProduto(post)}> Sobre </button>
                          </div>
                        </div>
                      </>
                    );
                  }
                })}
              </section>
            </div>
          </section>
        )}

        {mostrou6 && (
          <section className="modal">
            <div className="fechar-modal" onClick={fechou}>
              <IoClose/>
              Fechar Modal
            </div>
            <div className="container-produtos">
              <h1>HIDRÁULICA</h1>

              <section className="all-produtos">
                {Dados.map((post) => {
                  if (post.categoria == 6) {
                    return (
                      <>
                        <div
                          className="product"
                          key={post.id}
                          title={post.nome}
                        >
                          <nav>
                            <img src={post.imagem} alt={post.nome} />
                          </nav>
                          <h2>{post.nome}</h2>
                          <h3>Cód: {post.id}</h3>
                          <p>
                            <span>R$</span> {post.valor}
                          </p>
                          <div className="botao">
                            <button onClick={() => detalheProduto(post)}> Sobre </button>
                          </div>
                        </div>
                      </>
                    );
                  }
                })}
              </section>
            </div>
          </section>
        )}

        {mostrou7 && (
          <section className="modal">
            <div className="fechar-modal" onClick={fechou}>
              <IoClose/>
              Fechar Modal
            </div>
            <div className="container-produtos">
              <h1>ELÉTRICA</h1>

              <section className="all-produtos">
                {Dados.map((post) => {
                  if (post.categoria == 7) {
                    return (
                      <>
                        <div
                          className="product"
                          key={post.id}
                          title={post.nome}
                        >
                          <nav>
                            <img src={post.imagem} alt={post.nome} />
                          </nav>
                          <h2>{post.nome}</h2>
                          <h3>Cód: {post.id}</h3>
                          <p>
                            <span>R$</span> {post.valor}
                          </p>
                          <div className="botao">
                            <button onClick={() => detalheProduto(post)}> Sobre </button>
                          </div>
                        </div>
                      </>
                    );
                  }
                })}
              </section>
            </div>
          </section>
        )}

        {mostrou8 && (
          <section className="modal">
            <div className="fechar-modal" onClick={fechou}>
              <IoClose/>
              Fechar Modal
            </div>
            <div className="container-produtos">
              <h1>FERRAGEM</h1>

              <section className="all-produtos">
                {Dados.map((post) => {
                  if (post.categoria == 8) {
                    return (
                      <>
                        <div
                          className="product"
                          key={post.id}
                          title={post.nome}
                        >
                          <nav>
                            <img src={post.imagem} alt={post.nome} />
                          </nav>
                          <h2>{post.nome}</h2>
                          <h3>Cód: {post.id}</h3>
                          <p>
                            <span>R$</span> {post.valor}
                          </p>
                          <div className="botao">
                            <button onClick={() => detalheProduto(post)}> Sobre </button>
                          </div>
                        </div>
                      </>
                    );
                  }
                })}
              </section>
            </div>
          </section>
        )}

        {mostrou9 && (
          <section className="modal">
            <div className="fechar-modal" onClick={fechou}>
              <IoClose/>
              Fechar Modal
            </div>
            <div className="container-produtos">
              <h1>EPI</h1>

              <section className="all-produtos">
                {Dados.map((post) => {
                  if (post.categoria == 9) {
                    return (
                      <>
                        <div
                          className="product"
                          key={post.id}
                          title={post.nome}
                        >
                          <nav>
                            <img src={post.imagem} alt={post.nome} />
                          </nav>
                          <h2>{post.nome}</h2>
                          <h3>Cód: {post.id}</h3>
                          <p>
                            <span>R$</span> {post.valor}
                          </p>
                          <div className="botao">
                            <button onClick={() => detalheProduto(post)}> Sobre </button>
                          </div>
                        </div>
                      </>
                    );
                  }
                })}
              </section>
            </div>
          </section>
        )}

        <section className="modal-tel" id="menu-tel">
          <div className="fechar-modal" onClick={closeCategories}>
              <IoClose/>
              Fechar Categorias
            </div>
          <button onClick={primeiraCategoria} className="botao-cat">
            Maquinas
          </button>
          <button onClick={segundaCategoria} className="botao-cat">
            Decoração
          </button>
          <button onClick={terceiraCategoria} className="botao-cat">
            Ferramentas
          </button>
          <button onClick={quartaCategoria} className="botao-cat">
            Argamassas
          </button>
          <button onClick={quintaCategoria} className="botao-cat">
            Iluminação
          </button>
          <button onClick={sextaCategoria} className="botao-cat">
            Hidráulica
          </button>
          <button onClick={setimaCategoria} className="botao-cat">
            Elétrica
          </button>
          <button onClick={oitavaCategoria} className="botao-cat">
            Ferragem
          </button>
          <button onClick={nonaCategoria} className="botao-cat">
            EPI
          </button>
        </section>
        
        <section className="categorias">
          <button className="categoria" id="one" onClick={primeiraCategoria}>
            <p>Maquinas</p>
          </button>
          <button className="categoria" id="two" onClick={segundaCategoria}>
            <p>Decoração</p>
          </button>
          <button className="categoria" id="three" onClick={terceiraCategoria}>
            <p>Ferramentas</p>
          </button>
          <button className="categoria" id="four" onClick={quartaCategoria}>
            <p>Cimentos</p>
          </button>
          <button className="categoria" id="five" onClick={quintaCategoria}>
            <p>Iluminação</p>
          </button>
          <button className="categoria" id="six" onClick={sextaCategoria}>
            <p>Hidráulica</p>
          </button>
          <button className="categoria" id="seven" onClick={setimaCategoria}>
            <p>Elétrica</p>
          </button>
          <button className="categoria" id="eight" onClick={oitavaCategoria}>
            <p>Ferragem</p>
          </button>
          <button className="categoria" id="nine" onClick={nonaCategoria}>
            <p>EPI</p>
          </button>
        </section>
      </section>

      {/*BANNERS*/}
      <Banners />

      {/*PRODUTOS */}
      <section className="produtos">
        {fechar ? (
          <section className="detalhamento">
            <IoClose className="fechar" onClick={() => setFechar(false)} />
            {detalhe.map((item) => {
              return (
                <>
                  <section className="detalhe-interno">
                    <div className="orcamento-imagem">
                      <img src={item.imagem} alt={item.nome} />
                      <a href="https://ianbarbosa1.github.io/Orcamento-Fertem/" title="Fazer Orçamento"> Fazer Orçamento </a>
                    </div>
                    
                    <div className="sobre-produto">
                      <h1>{item.nome}</h1>
                      <h2>
                        {" "}
                        <span>R$</span> {item.valor}
                      </h2>
                      <span>Cod: {item.id}</span>

                      <nav>
                        <div>
                          <h4>Descrição do produto:</h4>
                        </div>

                        <p>{item.descricao}</p>
                      </nav>
                    </div>
                  </section>
                </>
              );
            })}
          </section>
        ) : null}

        <section className="titulo-externo">
            <nav></nav>
            <h1 className="titulo-produto">PRODUTOS</h1>
            <nav></nav>
        </section>

        <section className="container-produtos">
          <section className="all-produtos">
            {produtos.map((post) => {
              return (
                <>
                  <div className="product" key={post.id} title={post.nome}>
                    <nav>
                      <img src={post.imagem} alt={post.nome} />
                    </nav>
                    <h2>{post.nome}</h2>
                    <h3>Cód: {post.id}</h3>
                    <p>
                      <span>R$</span> {post.valor}
                    </p>
                    <div className="botao">
                      <button onClick={() => detalheProduto(post)} title="Mais informações sobre o produto">
                        Sobre
                      </button>
                    </div>
                  </div>
                </>
              );
            })}
          </section>
        </section>
      </section>
    </>
  );
}

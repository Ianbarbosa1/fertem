import Dados from "../produtos.json";

/*ICONES*/
import { BsBoxes } from "react-icons/bs";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { GiDrill } from "react-icons/gi";
import { FaBrush } from "react-icons/fa6";
import { BsTools } from "react-icons/bs";
import { FaMortarPestle } from "react-icons/fa6";
import { FaLightbulb } from "react-icons/fa6";
import { GiStraightPipe } from "react-icons/gi";
import { GiWireCoil } from "react-icons/gi";
import { PiLadder } from "react-icons/pi";
import { GiChelseaBoot } from "react-icons/gi";

/*IMAGENS*/
import logo from "../imagens/logo-sem-fundo.png";

import { useState } from "react";
import { IoClose } from "react-icons/io5";

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

  function openCategories(){
    let modal = document.querySelector('#menu-tel')
    modal.style.display = 'flex'
  }
  function closeCategories(){
    let modal = document.querySelector('#menu-tel')
    modal.style.display = 'none'
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
    
            <p title="Funcionamento da Loja Fisica" style={estilo} className="observador">
              {retorno}
            </p>
    
            <p className="menu-hamburguer" title="Categorias" onClick={openCategories}>
              <IoMenu />
            </p>
    </section>
    
      <section className="produto-categoria">

        {mostrou1 && (
          <section className="modal">
            <div className="container-produtos">
              <nav className="title">
                <h1>MAQUINAS</h1> 
                <IoClose className="fechar" onClick={fechou} />
              </nav>
              
              <section className="all-produtos">
                {Dados.map((post) => {
                  if (post.categoria == 1) {
                    return (
                      <>
                        <div className="product" key={post.id} title={post.nome}>
                          <nav>
                            <img src={post.imagem} alt={post.nome} />
                          </nav>
                          <h2>{post.nome}</h2>
                          <h3>Cód: {post.id}</h3>
                          <p><span>R$</span> {post.valor.toFixed(2)}</p>
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
            <div className="container-produtos">
              <nav className="title">
                <h1>DECORAÇÃO</h1> 
                <IoClose className="fechar" onClick={fechou} />
              </nav>

              <section className="all-produtos">
                {Dados.map((post) => {
                  if (post.categoria == 2) {
                    return (
                      <>
                        <div className="product" key={post.id} title={post.nome}>
                          <nav>
                            <img src={post.imagem} alt={post.nome} />
                          </nav>
                          <h2>{post.nome}</h2>
                          <h3>Cód: {post.id}</h3>
                          <p><span>R$</span> {post.valor.toFixed(2)}</p>
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
            <div className="container-produtos">
              <nav className="title">
                <h1>FERRAMENTAS</h1> 
                <IoClose className="fechar" onClick={fechou} />
              </nav>

              <section className="all-produtos">
                {Dados.map((post) => {
                  if (post.categoria == 3) {
                    return (
                      <>
                        <div className="product" key={post.id} title={post.nome}>
                          <nav>
                            <img src={post.imagem} alt={post.nome} />
                          </nav>
                          <h2>{post.nome}</h2>
                          <h3>Cód: {post.id}</h3>
                          <p><span>R$</span> {post.valor.toFixed(2)}</p>
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
            <div className="container-produtos">
              <nav className="title">
                <h1>ARGAMASSAS</h1> 
                <IoClose className="fechar" onClick={fechou} />
              </nav>

              <section className="all-produtos">
                {Dados.map((post) => {
                  if (post.categoria == 4) {
                    return (
                      <>
                        <div className="product" key={post.id} title={post.nome}>
                          <nav>
                            <img src={post.imagem} alt={post.nome} />
                          </nav>
                          <h2>{post.nome}</h2>
                          <h3>Cód: {post.id}</h3>
                          <p><span>R$</span> {post.valor.toFixed(2)}</p>
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
            <div className="container-produtos">
              <nav className="title">
                <h1>ILUMINAÇÃO</h1> 
                <IoClose className="fechar" onClick={fechou} />
              </nav>

              <section className="all-produtos">
                {Dados.map((post) => {
                  if (post.categoria == 5) {
                    return (
                      <>
                        <div className="product" key={post.id} title={post.nome}>
                          <nav>
                            <img src={post.imagem} alt={post.nome} />
                          </nav>
                          <h2>{post.nome}</h2>
                          <h3>Cód: {post.id}</h3>
                          <p><span>R$</span> {post.valor.toFixed(2)}</p>
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
            <div className="container-produtos">
              <nav className="title">
                <h1>HIDRÁULICA</h1> 
                <IoClose className="fechar" onClick={fechou} />
              </nav>

              <section className="all-produtos">
                {Dados.map((post) => {
                  if (post.categoria == 6) {
                    return (
                      <>
                        <div className="product" key={post.id} title={post.nome}>
                          <nav>
                            <img src={post.imagem} alt={post.nome} />
                          </nav>
                          <h2>{post.nome}</h2>
                          <h3>Cód: {post.id}</h3>
                          <p><span>R$</span> {post.valor.toFixed(2)}</p>
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
            <div className="container-produtos">
              <nav className="title">
                <h1>ELÉTRICA</h1> 
                <IoClose className="fechar" onClick={fechou} />
              </nav>

              <section className="all-produtos">
                {Dados.map((post) => {
                  if (post.categoria == 7) {
                    return (
                      <>
                        <div className="product" key={post.id} title={post.nome}>
                          <nav>
                            <img src={post.imagem} alt={post.nome} />
                          </nav>
                          <h2>{post.nome}</h2>
                          <h3>Cód: {post.id}</h3>
                          <p><span>R$</span> {post.valor.toFixed(2)}</p>
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
            <div className="container-produtos">
              <nav className="title">
                <h1>FERRAGEM</h1> 
                <IoClose className="fechar" onClick={fechou} />
              </nav>

              <section className="all-produtos">
                {Dados.map((post) => {
                  if (post.categoria == 8) {
                    return (
                      <>
                        <div className="product" key={post.id} title={post.nome}>
                          <nav>
                            <img src={post.imagem} alt={post.nome} />
                          </nav>
                          <h2>{post.nome}</h2>
                          <h3>Cód: {post.id}</h3>
                          <p><span>R$</span> {post.valor.toFixed(2)}</p>
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
            <div className="container-produtos">
              <nav className="title">
                <h1>EPI</h1> 
                <IoClose className="fechar" onClick={fechou} />
              </nav>

              <section className="all-produtos">
                {Dados.map((post) => {
                  if (post.categoria == 9) {
                    return (
                      <>
                        <div className="product" key={post.id} title={post.nome}>
                          <nav>
                            <img src={post.imagem} alt={post.nome} />
                          </nav>
                          <h2>{post.nome}</h2>
                          <h3>Cód: {post.id}</h3>
                          <p><span>R$</span> {post.valor.toFixed(2)}</p>
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
          <IoClose className="fechar" onClick={closeCategories}/>
          <button onClick={primeiraCategoria} className="botao-cat">Maquinas</button>
          <button onClick={segundaCategoria} className="botao-cat">Decoração</button>
          <button onClick={terceiraCategoria} className="botao-cat">Ferramentas</button>
          <button onClick={quartaCategoria} className="botao-cat">Argamassas</button>
          <button onClick={quintaCategoria} className="botao-cat">Iluminação</button>
          <button onClick={sextaCategoria} className="botao-cat">Hidráulica</button>
          <button onClick={setimaCategoria} className="botao-cat">Elétrica</button>
          <button onClick={oitavaCategoria} className="botao-cat">Ferragem</button>
          <button onClick={nonaCategoria} className="botao-cat">EPI</button>
        </section>

        <section className="categorias">
            <button className="categoria" id="one" onClick={primeiraCategoria}>
              <GiDrill />
              <p>Maquinas</p>
            </button>
            <button className="categoria" id="two" onClick={segundaCategoria}>
              <FaBrush />
              <p>Decoração</p>
            </button>
            <button className="categoria" id="three" onClick={terceiraCategoria}>
              <BsTools />
              <p>Ferramentas</p>
            </button>
            <button className="categoria" id="four" onClick={quartaCategoria}>
              <FaMortarPestle />
              <p>Argamassas</p>
            </button>
            <button className="categoria" id="five" onClick={quintaCategoria}>
              <FaLightbulb />
              <p>Iluminação</p>
            </button>
            <button className="categoria" id="six" onClick={sextaCategoria}>
              <GiStraightPipe />
              <p>Hidráulica</p>
            </button>
            <button className="categoria" id="seven" onClick={setimaCategoria}>
              <GiWireCoil />
              <p>Elétrica</p>
            </button>
            <button className="categoria" id="eight" onClick={oitavaCategoria}>
              <PiLadder />
              <p>Ferragem</p>
            </button>
            <button className="categoria" id="nine" onClick={nonaCategoria}>
              <GiChelseaBoot />
              <p>EPI</p>
            </button>
        </section>
      </section>
    </>
  );
}

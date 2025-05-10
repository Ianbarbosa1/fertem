import Marquee from "react-fast-marquee";
import Dados from "../produtos.json";

/*ICONES*/
import { GiDrill } from "react-icons/gi";
import { FaBrush } from "react-icons/fa6";
import { BsTools } from "react-icons/bs";
import { FaMortarPestle } from "react-icons/fa6";
import { FaLightbulb } from "react-icons/fa6";
import { GiStraightPipe } from "react-icons/gi";
import { GiWireCoil } from "react-icons/gi";
import { PiLadder } from "react-icons/pi";
import { GiChelseaBoot } from "react-icons/gi";

import { useState } from "react";
import { IoClose } from "react-icons/io5";

export function Categoria() {
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
    <section className="produto-categoria">
      {mostrou1 && (
        <section className="modal">
          <IoClose className="fechar" onClick={fechou} />
          <div className="container-produtos">
            <h1>MAQUINAS</h1>
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
          <IoClose className="fechar" onClick={fechou} />
          <div className="container-produtos">
            <h1>DECORAÇÃO</h1>
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
          <IoClose className="fechar" onClick={fechou} />
          <div className="container-produtos">
            <h1>FERRAMENTAS</h1>
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
          <IoClose className="fechar" onClick={fechou} />
          <div className="container-produtos">
            <h1>ARGAMASSAS</h1>
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
          <IoClose className="fechar" onClick={fechou} />
          <div className="container-produtos">
            <h1>ILUMINAÇÃO</h1>
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
          <IoClose className="fechar" onClick={fechou} />
          <div className="container-produtos">
            <h1>HIDRÁULICA</h1>
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
          <IoClose className="fechar" onClick={fechou} />
          <div className="container-produtos">
            <h1>ELÉTRICA</h1>
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
          <IoClose className="fechar" onClick={fechou} />
          <div className="container-produtos">
            <h1>FERRAGEM</h1>
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
          <IoClose className="fechar" onClick={fechou} />
          <div className="container-produtos">
            <h1>EPI</h1>
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

      <section className="categorias">
        <h1>CATEGORIAS</h1>
        <Marquee pauseOnHover speed={20} className="marquee">
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
        </Marquee>
      </section>
    </section>
  );
}

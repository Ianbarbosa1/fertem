import Dados from "../produtos.json";
import { useState } from "react";
import { Categoria } from "./categorias";
import lupa from "../imagens/pesquisa.svg"


export function Produtos() {

  /*FUNÇÃO DE PESQUISA*/
  const [busca, setBusca] = useState("");
  const buscaM = busca.toLowerCase();
  const produtos = Dados.filter((produto) =>
    produto.nome.toLowerCase().includes(buscaM)
  );

  return (
    <section className="produtos" id="produtos">
      <Categoria/>

      <div>
        <input
          type="text"
          placeholder="Qual produto deseja encontrar?"
          className="pesquisa"
          value={busca}
          onChange={(ev) => setBusca(ev.target.value)}
        />

        <img src={lupa} alt="" className="lupa"/>
      </div>

      <section className="container-produtos">
        <h1>PRODUTOS</h1>
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
                  <p><span>R$</span> {post.valor.toFixed(2)}</p>
                </div>
              </>
            );
          })}
        </section>
      </section>
    </section>
  );
}

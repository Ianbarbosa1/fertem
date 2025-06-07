import Dados from "../produtos.json";
import { useState } from "react";

import lupa from "../imagens/pesquisa.svg"
import { IoClose } from "react-icons/io5";

export function Produtos() {
  /*FUNÇÃO DE DETALHE DO PRODUTO*/
  const [detalhe, setDetalhe] = useState([])
  const [fechar, setFechar] = useState(false)
  const detalheProduto = (Produto) => 
  {
    setDetalhe([{...Produto}])
    setFechar(true)
  }

  /*FUNÇÃO DE PESQUISA*/
  const [busca, setBusca] = useState("");
  const buscaM = busca.toLowerCase();
  const produtos = Dados.filter((produto) =>
    produto.nome.toLowerCase().includes(buscaM)
  );

  return (
    <section className="produtos">
      {
        fechar ?
        <section className="detalhamento">
          <IoClose className="fechar" onClick={() => setFechar(false)} />
          {
            detalhe.map((item) => 
            {
              return(
                <>
                  <section className="detalhe-interno">
                    <img src={item.imagem} alt={item.nome} />
                    <div className="sobre-produto">
                      <h1>{item.nome}</h1>
                      <h2> <span>R$</span> {item.valor}</h2>
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
              )
            })
          }
        </section> :null
      }


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
                  <p><span>R$</span> {post.valor}</p>
                  <div className="botoes">
                    <button onClick={() => detalheProduto(post)}>Sobre</button>
                  </div>
                </div>
              </>
            )
          })}
        </section>
      </section>
    </section>
  );
}

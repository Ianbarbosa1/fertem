import { Promocao } from "../fragmentos/promocao";
import { Categoria } from "../componentes/categorias";

/*ICONES*/
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

/*IMAGENS*/
import t1 from "../imagens/filtro de carbon block.jpeg"
import t2 from "../imagens/filtro de polipropileno 10''.jpeg"
import t3 from "../imagens/filtro de polipropileno 5''.jpeg"
import t4 from "../imagens/osmose reversa.jpeg"
import t5 from "../imagens/suporte plastico para filtro de 5''.jpeg"
import produtos from "../imagens/tipos-produtos.jpg"

export function Entrada() {

  function alteracaoEstrutura(){
    let right = document.querySelector('#right')
    let left = document.querySelector('#left')
    let first = document.querySelector('.oneEstrutura')
    let second = document.querySelector('.twoEstrutura')

    right.style.opacity = '0'
    right.style.zIndex = '-1'
    left.style.opacity = '1'
    left.style.zIndex = '1'

    second.style.opacity = '1'
    second.style.zIndex = '1'
    first.style.opacity = '-1'
    first.style.zIndex = '0'
  }

  function alteracaoEstrutura2(){
    let right = document.querySelector('#right')
    let left = document.querySelector('#left')
    let first = document.querySelector('.oneEstrutura')
    let second = document.querySelector('.twoEstrutura')
    left.style.opacity = '0'
    left.style.zIndex = '-1'
    right.style.opacity = '1'
    right.style.zIndex = '1'

    first.style.opacity = '1'
    first.style.zIndex = '1'
    second.style.opacity = '-1'
    second.style.zIndex = '0'
  }

  return (
    <>
      <Categoria/>

      <section className="container-entrada">
        <span className="setas" id="left" onClick={alteracaoEstrutura2}>
          <FaArrowLeft />
        </span>

        <div className="container-estatico" id="container-estatico">
          
          <div className="oneEstrutura">
            <h1>Na Fertem, Oferecemos Soluções Completas em Equipamentos para  <strong className="frase1">Tratamento de Água</strong>, atendendo com Excelência às Necessidades de <strong className="frase2">Indústrias</strong> & <strong className="frase2">Residências</strong>. </h1>
            <nav className="imagens">
              <img src={t1} alt="Filtro de Carbon Block Carvão ativado 10''" title="Filtro de Carbon Block Carvão ativado 10''" />
              <img src={t2} alt="Filtro de Polipropileno 10''" title="Filtro de Polipropileno 10''" />
              <img src={t3} alt="Filtro de Polipropileno 5''" title="Filtro de Polipropileno 5''" />
              <img src={t4} alt="Osmose Reversa" title="Osmose Reversa" />
              <img src={t5} alt="Suporte Plástico para Filtro" title="Suporte Plástico para Filtro" />
            </nav>
          </div>

          <div className="twoEstrutura" id="ofertas">
            <img src={produtos} alt="Produtos" />
            <h1>Tudo para sua <strong className="frase1">Obra</strong> ou  <strong className="frase1">Manutenção</strong>, Você Encontra Aqui! Visite Nossa
            Loja em Itaboraí-RJ, no Bairro Ampliação.
            <br />Atendemos São Gonsalo, Niterói, Rio bonito.</h1>
          </div>

        </div>

        <span className="setas" id="right" onClick={alteracaoEstrutura}>
          <FaArrowRight />
        </span>
      </section>

      <section className="promocoes">
        <h1>OFERTAS EM DESTAQUE</h1>
        <div className="promocoes-int">
          <Promocao
            imagem={"https://i.postimg.cc/FHVQXP9c/jogo-escovas-circulares.jpg"}
            nome={"Jogo de Escovas Circulares 2'' 2 Peças"}
            deValor={"De R$ 15.00"}
            paraValor={"9.50"}
            observacao={"Desconto válido até o dia 25 de outubro"}
          />
          <Promocao
            imagem={"https://i.postimg.cc/k4pknz61/PU-40.png"}
            nome={"PU 40 Multiuso Selante Adesivo Branco"}
            deValor={"De R$ 20.00"}
            paraValor={"15.90"}
            observacao={"Desconto válido até o dia 13 de março"}
          />
          <Promocao
            imagem={"https://i.postimg.cc/FK9tGjXZ/aguarras.png"}
            nome={"Aguarrás Solvente e Removedor 500ml"}
            deValor={"De R$ 13.00"}
            paraValor={"10.00"}
            observacao={"Desconto válido enquanto durar o estoque"}
          />
          <Promocao
            imagem={"https://i.postimg.cc/BvNrzXqG/querosene.png"}
            nome={"Querosene Removedor Comum 500ml"}
            deValor={"De R$ 12.50"}
            paraValor={"6.00"}
            observacao={"Desconto válido enquanto durar o estoque"}
          />
        </div>
      </section>
    </>
  );
}

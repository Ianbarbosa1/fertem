import { Promocao } from "../fragmentos/promocao";
import { Categoria } from "../componentes/categorias";
import { Banners } from "./banners";

export function Entrada() {
  return (
    <>
      <Categoria/>

      <Banners/>

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

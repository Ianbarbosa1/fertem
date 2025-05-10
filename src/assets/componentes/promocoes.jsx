import { Promocao } from "../fragmentos/promocao";

/*IMAGENS*/
import imagem from "../imagens/back-teste-promocoes.png";
export function Promocoes() {
  return (
    <section className="promocoes">
      <h1>OFERTAS EM DESTAQUE</h1>
      <div className="promocoes-int" id="categoria">
        <Promocao
          imagem={imagem}
          nome={"Lixadeira Angular 7 Pol. 2.200W 220V MAKITA"}
          deValor={"De R$ 1.590"}
          paraValor={"1.674"}
          observacao={"Desconto válido até o dia 25 de outubro"}
        />
        <Promocao
          imagem={imagem}
          nome={"Furadeira de Bancada 12Pol. 350W 1/2HP Bivolt"}
          deValor={"De R$ 1.590"}
          paraValor={"1.589"}
          observacao={"Desconto válido até quando o dono quiser"}
        />
        <Promocao
          imagem={imagem}
          nome={"Fita Isolante 3M com 3 Metros de Largura"}
          deValor={"De R$ 8.90"}
          paraValor={"5.00"}
          observacao={"Desconto válido até o dia 25 de outubro"}
        />
        <Promocao
          imagem={imagem}
          nome={"Tesoura Escolar com Cabo de Plastico e Lamina de Ferro maciso"}
          deValor={"De R$ 2.90"}
          paraValor={"1.50"}
          observacao={"Desconto válido até o prazo de validade do produto"}
        />

        <Promocao
          imagem={imagem}
          nome={"Chave de Boca e Estria número 9"}
          deValor={"De R$ 2.90"}
          paraValor={"1.50"}
          observacao={"Desconto válido até durar o estoque"}
        />
      </div>
    </section>
  );
}

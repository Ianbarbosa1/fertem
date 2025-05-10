
// eslint-disable-next-line react/prop-types
export function Promocao({imagem, nome, deValor, paraValor, observacao}){
    return(
        <section className="promocao">
            <img src={imagem} alt={nome} />
            <h2>{nome}</h2>
            <div>{deValor}</div>
            <h3><span>R$</span> {paraValor}</h3>
            <p>{observacao}</p>
        </section>
    )
}
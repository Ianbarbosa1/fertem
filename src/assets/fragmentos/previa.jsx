// eslint-disable-next-line react/prop-types
export function Previa({imagem, nome}){
    return(
        <>
            <nav>
                <img src={imagem} alt={nome} />
                <h2>{nome}</h2>
            </nav>
        </>
    )
}
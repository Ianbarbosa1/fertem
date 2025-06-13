import Marquee from "react-fast-marquee"

/*LOGOS*/
import fame from '../imagens/parceiros/fame.png'
import horato from '../imagens/parceiros/horato.png'
import ativi from '../imagens/parceiros/ativi-filtros.png'
import fortelev from '../imagens/parceiros/fortlev.png'
import avant from '../imagens/parceiros/avant.png'
import bestfer from '../imagens/parceiros/bestfer.png'
import cobrecom from '../imagens/parceiros/cobrecom.png'
import corfio from '../imagens/parceiros/corfio.png'
import fertak from '../imagens/parceiros/fertak.png'
import foxlux from '../imagens/parceiros/foxlux.png'
import herc from '../imagens/parceiros/herc.png'
import jomarca from '../imagens/parceiros/jomarca.png'
import krona from '../imagens/parceiros/krona.png'
import lorenzetti from '../imagens/parceiros/lorenzetti.png'
import norton from '../imagens/parceiros/norton.png'
import roma from '../imagens/parceiros/roma.png'


export function Fornecedores(){
    return(
        <section className="fornecedores">
            <div className="titulo">
                <nav></nav>
                <h1>FORNECEDORES</h1> 
                <nav></nav>
            </div>
            
            <Marquee pauseOnHover speed={10} className="marquee">
                <img src={fame} alt="fame" />
                <img src={horato} alt="fame" />
                <img src={ativi} alt="fame" />
                <img src={fortelev} alt="fame" />
                <img src={avant} alt="fame" />
                <img src={bestfer} alt="fame" />
                <img src={cobrecom} alt="fame" />
                <img src={corfio} alt="fame" />
            </Marquee>

            <Marquee pauseOnHover speed={10} direction="right" className="marquee">
                <img src={fertak} alt="fame" />
                <img src={foxlux} alt="fame" />
                <img src={herc} alt="fame" />
                <img src={jomarca} alt="fame" />
                <img src={krona} alt="fame" />
                <img src={lorenzetti} alt="fame" />
                <img src={norton} alt="fame" />
                <img src={roma} alt="fame" />
            </Marquee>
        </section>
    )
}
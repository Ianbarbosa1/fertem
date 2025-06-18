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
import deca from '../imagens/parceiros/deca.png'
import fabrimar from '../imagens/parceiros/fabrimar.png'
import bosch from '../imagens/parceiros/bosch.png'
import thompson from '../imagens/parceiros/thompson.png'

import fertak from '../imagens/parceiros/fertak.png'
import foxlux from '../imagens/parceiros/foxlux.png'
import herc from '../imagens/parceiros/herc.png'
import jomarca from '../imagens/parceiros/jomarca.png'
import krona from '../imagens/parceiros/krona.png'
import lorenzetti from '../imagens/parceiros/lorenzetti.png'
import norton from '../imagens/parceiros/norton.png'
import roma from '../imagens/parceiros/roma.png'
import viapol from '../imagens/parceiros/viapol.png'
import wurth from '../imagens/parceiros/wurth.png'
import starret from '../imagens/parceiros/starret.png'
import wd40 from '../imagens/parceiros/wd-40.png'


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
                <img src={horato} alt="horato" />
                <img src={ativi} alt="ativi" />
                <img src={fortelev} alt="fortelev" />
                <img src={avant} alt="avant" />
                <img src={bestfer} alt="bestfer" />
                <img src={cobrecom} alt="cobrecom" />
                <img src={corfio} alt="corfio" />
                <img src={deca} alt="deca" />
                <img src={fabrimar} alt="fabrimar" />
                <img src={bosch} alt="bosch" />
                <img src={thompson} alt="thompson" />
            </Marquee>

            <Marquee pauseOnHover speed={10} direction="right" className="marquee">
                <img src={fertak} alt="fertak" />
                <img src={foxlux} alt="foxlux" />
                <img src={herc} alt="herc" />
                <img src={jomarca} alt="jomarca" />
                <img src={krona} alt="krona" />
                <img src={lorenzetti} alt="lorenzetti" />
                <img src={norton} alt="norton" />
                <img src={roma} alt="roma" />
                <img src={viapol} alt="viapol" />
                <img src={wurth} alt="wurth" />
                <img src={starret} alt="starret" />
                <img src={wd40} alt="wd40" />
            </Marquee>
        </section>
    )
}
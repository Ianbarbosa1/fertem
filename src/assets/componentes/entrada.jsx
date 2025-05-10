import { Previa } from "../fragmentos/previa";

/*ICONES*/
import { BsBoxes } from "react-icons/bs";
import { FaMapLocationDot } from "react-icons/fa6";
import { MdAttachMoney } from "react-icons/md";

/*IMAGENS*/
import logo from "../imagens/fertem-logo-sem-fundo.png";
import servicos from "../imagens/tipos-produtos.jpg"
import icone1 from "../imagens/icon-eletrica.png"
import icone2 from "../imagens/icon-hidraulica.png"
import icone3 from "../imagens/icon-ferragens.png"
import icone4 from "../imagens/icon-ferramentas.png"
import icone5 from "../imagens/icon-maquinas.png"


let horas = new Date();
let dia = horas.getDay();
let hora = horas.getHours();

function funcionamento(){
  if( (hora >= 8 && hora <= 18 && dia >= 1 && dia <= 6) || (hora >= 8 && hora <= 13 && dia == 7)) {
    return true
  }  
  else {
    return false
  } 
}

let estilo = ''
let retorno = funcionamento()
if(retorno === true){
  retorno = 'Aberta'
  estilo = {
    backgroundColor: 'rgba(153, 255, 0, 0.671)'
  }
}
else{
  retorno = 'Fechada'
  estilo = {
    backgroundColor: 'tomato'
  }
}

setInterval(() => {
    setTimeout(() => {
      let baseOne = document.querySelector('#base-1')
      let baseTwo = document.querySelector('#base-2')
      baseOne.style.zIndex = '-1'
      baseOne.style.opacity = '0'
      baseTwo.style.zIndex = '1'
      baseTwo.style.opacity = '1'
    },1000);

    setTimeout(() => {
      let baseOne = document.querySelector('#base-1')
      let baseTwo = document.querySelector('#base-2')
      baseOne.style.zIndex = '1'
      baseOne.style.opacity = '1'
      baseTwo.style.zIndex = '-1'
      baseTwo.style.opacity = '0'
    },11000);
}, 25000);


export function Entrada() {
  return (
    <>
      <section className="menu">
        <a href="#homes">
          <img src={logo} alt="Logo Fertem" />
        </a>
        
        <nav className="links">
          <a href="#produtos" title="Produtos">
            <BsBoxes/>
            <small>Produtos</small>
          </a>
           
          <a href="https://maps.app.goo.gl/EhaDchrhHiLp9Upe8"
          target="_blank" title="Localização"> 
            <FaMapLocationDot/>
            <small>Localização</small>
          </a>

          <a href="" title="orçamento">
            <MdAttachMoney/>
            <small>Orçamento</small>
          </a>
        </nav>

        <p title="Funcionamento da Loja Fisica" style={estilo}>{retorno}</p>
      </section>

      <section className="container-entrada" id="homes">
        <div className="base-1" id="base-1">
         <h1>Na Fertem, oferecemos soluções completas para quem busca qualidade e confiança em produtos de elétrica, hidráulica, ferragens, ferramentas e máquinas. Atuando com compromisso e seriedade, nossa missão é atender desde profissionais da construção civil até clientes que valorizam um bom atendimento e produtos de alta performance.</h1>
         <img src={servicos} alt="servicos"/>
        </div>
        
        <div className="base-2" id="base-2">
          <h1>Tudo para sua obra ou manutenção, você encontra aqui! Visite nossa loja em Itaboraí-RJ, no bairro Ampliação.<br /> Atendemos São Gonsalo, Niterói, Rio bonito.</h1>
          
          <div className="previa">
            <Previa
              imagem={icone5}
              nome="MAQUINAS"
            />            
            <Previa
              imagem={icone4}
              nome="FERRAMENTAS"
            />
            <Previa
              imagem={icone2}
              nome="HIDRÁULICA"
            />
            <Previa
              imagem={icone1}
              nome="ELÉTRICA"
            />
            <Previa
              imagem={icone3}
              nome="FERRAGENS"
            />
          </div>
        </div>
      </section>
    </>
  );
}

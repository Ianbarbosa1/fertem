/*ICONES*/
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

export function Banners() {
  function alteracaoEstrutura() {
    let right = document.querySelector("#right");
    let left = document.querySelector("#left");
    let first = document.querySelector(".oneEstrutura");
    let second = document.querySelector(".twoEstrutura");

    right.style.opacity = "0";
    right.style.zIndex = "-1";
    left.style.opacity = "1";
    left.style.zIndex = "2";

    second.style.opacity = "1";
    second.style.zIndex = "+1";
    first.style.opacity = "-1";
    first.style.zIndex = "0";
  }

  function alteracaoEstrutura2() {
    let right = document.querySelector("#right");
    let left = document.querySelector("#left");
    let first = document.querySelector(".oneEstrutura");
    let second = document.querySelector(".twoEstrutura");
    left.style.opacity = "0";
    left.style.zIndex = "-1";
    right.style.opacity = "1";
    right.style.zIndex = "1";

    first.style.opacity = "1";
    first.style.zIndex = "1";
    second.style.opacity = "-1";
    second.style.zIndex = "0";
  }

  return (
    <section className="container-entrada">
      <span className="setas" id="left" onClick={alteracaoEstrutura2}>
        <IoIosArrowBack/>
      </span>

      <section className="oneEstrutura"></section>

      <a href="https://maps.app.goo.gl/EhaDchrhHiLp9Upe8" aria-label="Localização da loja fisica" title="Localização" target="_Blank" className="twoEstrutura"></a>

      <span className="setas" id="right" onClick={alteracaoEstrutura}>
        <IoIosArrowForward />
      </span>

    </section>
  );
}

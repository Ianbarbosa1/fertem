import logo from '../imagens/logo-sem-fundo.png'
import { FaWhatsapp } from 'react-icons/fa6'
import { FaInstagram } from 'react-icons/fa6' 
import { FaFacebookF } from 'react-icons/fa6' 
export function Footer(){
    return(
        <>  
            <section className='rodape'>
                <section className='sobre'>
                    <img src={logo} alt="Fertem-logo"/>
                    <address>Av. Antônio Gomes. 1069 - Ampliação, Itaborai-RJ 24806-686.</address>
                    <p>Funcionamos de Segunda á Sabado das 08:00 ás 18:00Hrs e Domingos das 08:00 ás 13:00Hrs.</p>
                </section>

                <section className='links-footer'>
                    <a href='#home'>Home</a>
                    <a href='#ofertas'>Ofertas</a>
                    <a href='#produtos'>Produtos</a>
                    <a href='https://maps.app.goo.gl/EhaDchrhHiLp9Upe8' target="_blank">Localização</a>
                </section>

                <section className='redes'>
                    <a href='https://wa.me/5521971678688' target="_blank">
                        <FaWhatsapp/>
                        <div>
                            <p>WhatsApp</p>
                            <span>(21) 97167-8688</span>
                        </div>
                    </a>

                    <a href='https://www.instagram.com/fertem01?igsh=OXg5Njg0Zm45bWho' target="_blank">
                        <FaInstagram/>
                        <div>
                            <p>Instagram</p>
                            <span>@Fertem</span>
                        </div>
                    </a>

                    <a href='https://maps.app.goo.gl/EhaDchrhHiLp9Upe8' target="_blank"> 
                        <FaFacebookF/>
                        <div>
                            <p>Facebook</p>
                            <span>Fertem</span>
                        </div>
                    </a>
                </section>
            </section>

            <div className='end'>
                <h1>© Todos os Direitos Reservados Por Fertem Ferragista</h1>
                <nav></nav>
                <h2>Atendemos São Gonsalo, Niterói, Rio bonito e Itaboraí</h2>
            </div>
        </>
    )
}
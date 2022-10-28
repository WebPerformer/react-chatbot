import React from 'react'

// images
import Logo from '../assets/img/logo-footer.png'

// icons
import { BsHeadphones, BsEnvelope, BsMap } from 'react-icons/bs'

function Footer({modalToggle, setModalToggle}) {
  return (
    <footer className="footer">
        <div className="content">
            <div className="footer-container">
                <div className="get-started">
                    <div className="small-text">Veja agora nosso chat</div>
                    <div className="big-text">Pronto Para Começar?</div>
                    
                    <div className="button" onClick={() => setModalToggle(!modalToggle)}>Teste Agora</div>
                </div>
                <div className="footer-content">
                    <div className="brand">
                        <img src={Logo} alt="" />
                    </div>
                    <div className="sections">
                        <h1>Páginas</h1>
                        <a href="#hero"><p>Inicio</p></a>
                        <a href="#resources"><p>Recursos</p></a>
                        <a href="#about"><p>Sobre</p></a>
                        <a href="#faq"><p>FAQ</p></a>
                    </div>
                    <div className="contact">
                        <h1>Contato</h1>
                        <p><span><BsHeadphones/></span> +55 11 912345678</p>
                        <p><span><BsEnvelope/></span> chatlixo@suporte.com</p>
                        <p><span><BsMap/></span> R. Da Frente, 492</p>
                    </div>
                </div>
                <div className="line"></div>
                <div className="footer-copyright">
                    Copyright 2022 ChatLixo - Todos os Direitos Reservados
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
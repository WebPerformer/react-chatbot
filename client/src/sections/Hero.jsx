import React from 'react'

// icons
import { BsFillPlayFill } from 'react-icons/bs'

// images
import Phone from '../assets/img/phone.png'
import Shap_1 from '../assets/img/shap-1.png'
import Shap_2 from '../assets/img/shap-2.png'

function Hero() {
    return (
        <section className="hero" id="hero">
            <img src={Shap_1} alt="" className="shap shap-1"/>
            <img src={Shap_2} alt="" className="shap shap-2"/>
            <div className="content">
                <div className="hero-container">
                    <div className="left">
                        <div className="text">
                            <p className="mid-text">O Mais Novo</p>
                            <p className="big-text">ChatLixo<span>.</span></p>
                            <p className="small-text">O caminho para a reciclagem na palma da sua mão, solução para você que ainda tem duvidas sobre os tipos de lixo! Usaremos a tecnologia perfeita para resolver e esclarecer as duvidas abrangentes sobre os tipos de lixo.</p>
                        </div>
                        <div className="buttons">
                            <button className="play-button"><BsFillPlayFill/></button>
                            <a href="#"><button className="read_more-button">Saiba mais</button></a>
                        </div>
                    </div>
                    <div className="right">
                        <img src={Phone} alt="" className="phone-image" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
import React from 'react'

// images
import Phone from '../assets/img/about.png'

// swiper
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper"
import "swiper/css"

function About() {
  return (
    <section className="about" id="about">
        <div className="content">
            <div className="about-container">
                <div className="left">
                    <img src={Phone} alt="" />
                </div>
                <div className="right">
                    <div className="small-text">Sobre Nós</div>
                    <div className="mid-text">O Que é o ChatLixo?</div>
                    <div className="description">
                        <p>O intuito da nossa ferramenta, é oferecer com maior clareza em relação aos tipos de lixo e onde poderás descartá-los. O chatbot integrado dentro da aplicação que utiliza inteligência artificial para falar com o usuário, será especializado em responder perguntas voltadas para detalhes em geral sobre os lixos.</p>
                        <p>Utilizando Deep Learning ele é capaz de responder suas perguntas der forma inteligente e eficaz. As tecnologias nele implementadas são de alto nível e modernas.</p>
                    </div>
                    <Swiper
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                        modules={[Autoplay]}
                    >
                        <SwiperSlide>
                            <div className="ceo">Eric V.</div>
                            <div className="office">Full Stack Dev & UI/UX Design</div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="ceo">Heitor N.</div>
                            <div className="office">Analista de Sistema</div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="ceo">Hebert R.</div>
                            <div className="office">Software Engineer</div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About

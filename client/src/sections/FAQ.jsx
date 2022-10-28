import React, { useState } from 'react'

// images
import Faq from '../assets/img/faq.png'

function FAQ() {

    const [faq, setFaq] = useState([
        {
            question: 'O Que é Um Chatbot?',
            answer: 'Chatbot é um software capaz de responder como um ser humano em uma conversação por meio de Chat. O objetivo é responder suas questões da melhor forma possivel para que ela seja sanada imediatamente.',
            open: true
        },
        {
            question: 'Como a Plataforma Funciona?',
            answer: 'Nossa plataforma de fácil entendimento e intuitiva mostram ao usuario formas de descarte de lixo por meio de um Chat que apelidamos de ChatLixo. Você pode testar clicando em Demo na parte superior do site ou indo ao roda pé e clicar em "Teste Agora".',
            open: false
        },
        {
            question: 'O que o ChatLixo pode fazer?',
            answer: 'Ele responde suas questões sobre descarte de lixos. Basta iniciar nosso Chat e dizer qual lixo deseja descartar e nosso Bot irá responder de pronto para você.',
            open: false
        }
    ])

    const toggleFAQ = index => {
        setFaq((faq.map((faqs, i) => {
            if(i === index){
                faqs.open = !faqs.open
            }else{
                faqs.open = false
            }

            return faqs
        })))
    }

    return (
    <section className="faq" id="faq">
        <div className="content">
            <div className="faq-container">
                <div className="left">
                    <div className="small-text">FAQ</div>
                    <div className="mid-text">Perguntas Frequentes</div>
                    <div className="questions-container">
                        {faq.map((faq, index) => (
                            <div
                                className={"faq-content " + (faq.open ? 'open' : '')}
                                key={index}
                                onClick={() => toggleFAQ(index)}
                            >
                                <div className="faq-question">
                                    {faq.question}
                                    <div className="faq-status">
                                        {faq.open ? "-" : "+"}
                                    </div>
                                </div>
                                <div className="faq-answer">
                                    {faq.answer}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="right">
                    <img src={Faq} alt="" />
                </div>
            </div>
        </div>
    </section>
    )
}

export default FAQ
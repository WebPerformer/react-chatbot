import React, { useState } from 'react'

// icons
import { IoAlbumsSharp, IoBulbOutline } from 'react-icons/io5'
import { IoIosBookmarks } from 'react-icons/io'
import { FaTimes } from 'react-icons/fa'

function Resources() {

  const [modal, setModal] = useState([])
  const [modalToggle, setModalToggle] = useState(false)

  const resources = [
    {
      icon: <IoAlbumsSharp/>,
      name: "Construção",
      description: "Nosso Chatbot utiliza a mais alta técnologia, e foi contruido para suprir todas as suas necessidades. Nós fizemos um trabalho de alto rendimento e escalabilidade! Com os Frameworks mais atuais podemos fazer um projeto limpo e de alto desempenho podendo assim entregar a você o mais moderno software de reciclagem do momento.",
      button: "Saiba Mais"
    },
    {
      icon: <IoBulbOutline/>,
      name: "Integração",
      description: "Nossas APIs de fácil entendimento garante um fácil portabilidade e integração com o software que deseja implementar. Nossa rede de engenheiros de software tiveram uma jornada ardua até chegarem no resultado atual, onde podemos acessar as informações do Bot em qualquer plataforma. Nosso Framework Back-End desenvolvido em Python garante uma ótima resposta do nosso ChatLixo.",
      button: "Saiba Mais"
    },
    {
      icon: <IoIosBookmarks/>,
      name: "Machine Learning",
      description: "Podemos dizer que o conceito de IA está relacionado à capacidade de soluções tecnológicas realizarem atividades de um modo considerado inteligente. IAs também podem “aprender por si mesmas” graças a sistemas de aprendizado que analisam grandes volumes de dados, possibilitando a elas ampliarem seus conhecimentos.",
      button: "Saiba Mais"
    },
  ]

  modalToggle ? document.body.style.overflowY = "hidden" : document.body.style.overflowY = "auto"

  const handleModal = (card) => {
    setModal([card])
    setModalToggle(true)
  }

  return (
    <section className="resources" id="resources">
      <div className="content">
        <div className="resources-container">
          <div className="resources-cards">
            {resources.map((card, index) => {
              return(
                <div className="card" key={index}>
                  <div className="resource-icon">{card.icon}</div>
                  <div className="resource-name">{card.name}</div>
                  <div className="resource-description">{card.description}</div>
                  <div className="resource-button" onClick={() => handleModal(card)}>{card.button}</div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      {modalToggle && <>
        {modal.map((item, index) => {
          return(
            <div className="modal" key={index}>
              <div className="resources-modal">
                <div className="close-button" onClick={() => setModalToggle(false)}><FaTimes/></div>
                <div className="modal-icon">{item.icon}</div>
                <div className="modal-name">{item.name}</div>
                <div className="modal-description">{item.description}</div>
              </div>
              <div className="bg-overlay" onClick={() => setModalToggle(false)}></div>
            </div>
          )
        })}
      </>}
    </section>
  )
}

export default Resources

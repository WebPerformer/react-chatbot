import React, { useState, useEffect, useRef } from 'react'
import $ from 'jquery'

// images
import Logo from '../assets/img/logo.png'
import Bot from '../assets/img/bot.png'
import User from '../assets/img/user.png'

// icons
import { FaTimes } from 'react-icons/fa'
import { AiOutlineSend } from 'react-icons/ai'

function Chatbot({modalToggle, setModalToggle}) {
    const [userText, setUserText] = useState()
    const inputRef = useRef(null)
    const chatRef = useRef(null)

    const formatDate = (date) => {
        const h = "0" + date.getHours();
        const m = "0" + date.getMinutes();
        return `${h.slice(-2)}:${m.slice(-2)}`;
    }

    const handleClick = (event) => {
        event.preventDefault()
        setUserText(inputRef.current.value)
        inputRef.current.value = ""
    }

    useEffect(() => {
        $.get("http://localhost:5174/get", { msg: userText }).done(function (data){
            const msgText = decodeURIComponent(escape(data))
            const userMsg = `
                <div class="chatbot-msg right-msg">
                    <div class="chatbot-img">
                        <img src=${User} alt="" />
                    </div>
                    <div class="chatbot-text">
                        <div class="chatbot-time">${formatDate(new Date())}</div>
                        <div class="chatbot-bubble">
                            <p>${userText}</p>
                        </div>
                    </div>
                </div>
            `
            chatRef.current.insertAdjacentHTML("beforeend", userMsg)

            const botMsg = `
                <div class="chatbot-msg left-msg">
                    <div class="chatbot-img">
                        <img src=${Bot} alt="" />
                    </div>
                    <div class="chatbot-text">
                        <div class="chatbot-time">${formatDate(new Date())}</div>
                        <div class="chatbot-bubble">
                            <p>${msgText}</p>
                        </div>
                    </div>
                </div>
            `
            chatRef.current.insertAdjacentHTML("beforeend", botMsg)

            chatRef.current.scrollTop += 4000
        })
    }, [userText])

    return (
        <div className={modalToggle ? "chatbot-modal activate" : "chatbot-modal"}>
            <div className="chatbot">
                <div className="chatbot-header">
                    <div className="chatbot-logo">
                        <img src={Logo} alt="" />
                        <p>ChatLixo<span>.</span></p>
                    </div>
                    <div className="chatbot-close" onClick={() => setModalToggle(!modalToggle)}><FaTimes/></div>
                </div>
                <div className="chatbot-chat" ref={chatRef}>
                    <div className="chatbot-msg left-msg">
                        <div className="chatbot-img">
                            <img src={Bot} alt="" />
                        </div>
                        <div className="chatbot-text">
                            <div className="chatbot-bubble">
                                <p>Olá meu nome é VacBot. Sou um robô capaz de tirar todas as suas dúvidas sobre vacinação.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="chatbot-inputs">
                    <form>
                        <input type="text" placeholder="Escreva Algo..." ref={inputRef}/>
                        <button type="submit" id="submit" onClick={handleClick}><AiOutlineSend/></button>
                    </form>
                </div>
            </div>
            <div className="chat-overlay" onClick={() => setModalToggle(!modalToggle)}/>
        </div>
    )
}

export default Chatbot
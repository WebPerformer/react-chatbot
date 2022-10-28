import React, { useEffect, useState } from 'react'

// components
import Menu from './Menu'

// images
import Logo from '../assets/img/logo.png'

function Nav({chatToggle, setChatToggle}) {
    const [sticky, setSticky] = useState("")

    useEffect(() => {
        window.onscroll = () => {
            scrollY > 180 ? setSticky("sticky") : setSticky("")
        }
    }, [])

    return (
        <nav className={`nav ${sticky}`}>
            <div className="content">
                <div className="nav-container">
                    <div className="brand">
                        <a href="#"><img src={Logo} alt="" /></a>
                    </div>
                    <Menu chatToggle={chatToggle} setChatToggle={setChatToggle}/>
                </div>
            </div>
        </nav>
    )
}

export default Nav
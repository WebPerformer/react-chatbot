import React, { useEffect, useState } from 'react'

// components
import Menu from './Menu'

// images
import Logo from '../assets/img/logo.png'

// icons
import { HiOutlineMenuAlt3 } from 'react-icons/hi'

function NavResponse() {

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
                <ul className="menu-list">
                    <li><a href="#"><div className="button">Demo</div></a></li>
                    <div className="menu-icon"><HiOutlineMenuAlt3/></div>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default NavResponse
import React from 'react'
import ScrollspyNav from 'react-scrollspy-nav'

function Menu(props) {

  return (
    <ScrollspyNav
      scrollTargetIds={["hero", "resources", "about", "faq"]}
      offset={-40}
      activeNavClass="is-active"
    >
      <ul className="menu-list">
        <li><a href="#hero">Inicio</a></li>
        <li><a href="#resources">Recursos</a></li>
        <li><a href="#about">Sobre</a></li>
        <li><a href="#faq">FAQ</a></li>
        <li><div className="button" onClick={() => props.setChatToggle(!props.chatToggle)}>Demo</div></li>
      </ul>
    </ScrollspyNav>
  )
}

export default Menu
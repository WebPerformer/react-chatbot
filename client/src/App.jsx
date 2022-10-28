import React, { useState, useEffect } from 'react'

// components
import Nav from "./components/Nav"
import NavResponse from './components/NavResponse'
import Footer from './components/Footer'
import Chatbot from './components/Chatbot'

// sections
import Hero from "./sections/Hero"
import Resources from './sections/Resources'
import About from './sections/About'
import FAQ from './sections/FAQ'

// styles
import './assets/styles/global.css'
import './assets/styles/nav.css'
import './assets/styles/hero.css'
import './assets/styles/resources.css'
import './assets/styles/about.css'
import './assets/styles/faq.css'
import './assets/styles/footer.css'
import './assets/styles/chatbot.css'

function App() {

  const [chatToggle, setChatToggle] = useState(false)
  useEffect(() => {
    chatToggle ? document.body.style.overflowY = "hidden" : document.body.style.overflowY = "auto"
  }, [chatToggle])

  // navbar responsive
  const size = useWindowSize()

  const [navbar, setNavbar] = useState(<Nav chatToggle={chatToggle} setChatToggle={setChatToggle}/>)

  // screen size capture hook
  function useWindowSize() {
      const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
      });
      useEffect(() => {
      function handleResize() {
          setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
          });
      }
      window.addEventListener("resize", handleResize);
      handleResize();
      return () => window.removeEventListener("resize", handleResize);
      }, []);
      return windowSize;
  }

  // navbar breakpoint
  useEffect(() => {
      window.innerWidth <= 730 ? setNavbar(<NavResponse/>) : setNavbar(<Nav chatToggle={chatToggle} setChatToggle={setChatToggle}/>)
  }, [size])

  return (
    <div className="App">
      {navbar}
      <Hero/>
      <Resources/>
      <About/>
      <FAQ/>
      <Footer modalToggle={chatToggle} setModalToggle={setChatToggle}/>
      <Chatbot modalToggle={chatToggle} setModalToggle={setChatToggle}/>
    </div>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Banner from "./components/Banner.jsx"
import Logo from './components/Logo.jsx'
import Aboutus from './components/Aboutus.jsx'
import Services from './components/Services.jsx'
import Footer from './components/Footer.jsx'
import Calltoaction from './components/Calltoaction.jsx'


function App() {
  

  return (
    <>
    <Banner/>
    <Logo/>
    <Aboutus/>
    <Services/>
    <Calltoaction/>
    <Footer/>
       
        
      
       
      
    </>
  )
}

export default App

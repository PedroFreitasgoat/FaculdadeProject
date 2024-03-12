import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
       <Title subTitle='Seu PROGRAMA' title='Qual sua oferta'/>
      <Programs/> 
      <About/>
      <Title subTitle='Galeria' title='Fotos do campo'/>
      <Campus/>
      <Title subTitle='Depoimentos' title='O que diz o aluno'/>
    <Testimonials/>
    <Title subTitle='Fale conosco' title='Entre em Contato'/>
    <Contact/>
    <Footer/>
      </div>
    </div>
  )
}

export default App

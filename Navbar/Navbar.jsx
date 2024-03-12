import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'

const Navbar = () => {

  const [stincky, setStincky] = useState (false);

  useEffect(() => {
    window.addEventListener('scroll', ()=>{
      window.scrollY > 500 ? setStincky(true) : setStincky(false);
    })
  },[]);


  return (
    <nav className={`container ${stincky? 'dark-nav' : ''}`}>
      <img src={logo} alt="" className='logo'/>
      <ul>
        <li>Home</li>
        <li>Program</li>
        <li>About us</li>
        <li>Campus</li>
        <li>Testimonials</li>
        <li><button className='btn'>Constact us</button></li>
      </ul>
    </nav>
  )
}

export default Navbar

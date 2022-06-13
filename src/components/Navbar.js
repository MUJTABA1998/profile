import React, { useRef } from 'react'
import { Link } from 'react-scroll'
import { ImMenu } from 'react-icons/im'
import { RiCloseLine } from 'react-icons/ri'
import '../css/navbar.css'

const Navbar = () => {

  const navRef = useRef();

  const responsiveNav = () => {
    navRef.current.classList.toggle('responsive')
  }

  const removeResNav = () => {
    navRef.current.classList.remove('responsive')
  }

  return (
    <header className="navbar">
      <Link className='logo' to="/">{`{ `}<span>solution hits</span>{` }`}</Link>
      <nav ref={navRef}>
        <Link to="home-section" smooth={true} spy={true} className='active' onClick={removeResNav}>Home</Link>
        <Link to="about-section" smooth={true} spy={true} onClick={removeResNav}>About</Link>
        <Link to="about-section" smooth={true} spy={true} onClick={removeResNav}>Portfolio</Link>
        <Link to="services-section" smooth={true} spy={true} onClick={removeResNav}>Services</Link>
        <Link to="projects-section" smooth={true} spy={true} onClick={removeResNav}>Projects</Link>
        <Link to="contact-section" smooth={true} spy={true} onClick={removeResNav}>Contact</Link>
        <button className='close-btn' onClick={() => removeResNav()}><RiCloseLine/></button>
        <h3 className='slogan'>{`{ `}<span>solution hits</span>{` }`}</h3>
      </nav>
      <button className="menu-btn" onClick={() => responsiveNav()}><ImMenu/></button>
    </header>
  )
}

export default Navbar

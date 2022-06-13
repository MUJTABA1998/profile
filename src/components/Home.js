import React from 'react'
import Navbar from './Navbar'
import '../css/home.css'
import Typewriter from 'typewriter-effect'
import { Link } from 'react-scroll'
import { CgArrowLongDown } from 'react-icons/cg'





const Home = () => {
  return (
    <div className='home'>
    <Navbar/>
        <section className='home-content' id='home-section'>
          <h4>Hey, I AM</h4>
          <h1>Mujtaba Asif</h1>
          <br/>
          <div className='writer'>
          <Typewriter
            options={{
              strings:[`I Am Software Engineer.`, "I Am MERN STACK Developer.",],
              autoStart: true,
              loop: true 
            }}
          />
          </div>
          <h5 className='arrow'><CgArrowLongDown/></h5>
          <Link to="about-section" smooth={true} spy={true} className='arrow-title'>About</Link>
        </section>
    </div>
  )
}

export default Home
import React, { useState } from 'react'
import '../css/about.css'
import Bio from './pages/Bio'
import Education from './pages/Education'
import Experience from './pages/Experience'
import Skills from './pages/Skill'
import { CgArrowLongDown } from 'react-icons/cg'
import { Link } from 'react-scroll'



const About = () => {

  const [about, setAbout] = useState(true)
  const [edu, setEdu] = useState(false)
  const [work, setWork] = useState(false)
  const [skill, setSkill] = useState(false)

  console.log(about, edu, work, skill);

  return (
    <section className="about" id='about-section'>
      <ul className='side-links'>
        <li
          onClick={ () => {
            setAbout(true)
            setSkill(false)
            setEdu(false)
            setWork(false)
          }}
        >About</li>
        <li
        onClick={ () => {
          setAbout(false)
          setSkill(false)
          setEdu(true)
          setWork(false)
        }}
        >Education</li>
        <li
        onClick={ () => {
          setAbout(false)
          setSkill(false)
          setEdu(false)
          setWork(true)
        }}
        >Work Experience</li>
        <li
        onClick={ () => {
          setAbout(false)
          setSkill(true)
          setEdu(false)
          setWork(false)
        }}
        >Skills</li>
      </ul>
      <section className='tab-info'>
      
        { about && <Bio/> }
        { work && <Experience/> }
        { skill && <Skills/> }
        { edu && <Education/> }
      
      </section>
      <section className='right-bar'>
          <Link to="services-section" smooth={true} spy={true} className='arrow-title'>Services</Link>
          <Link to="services-section" spy={true} smooth={true} className='arrow'><CgArrowLongDown/></Link>
      </section>
    </section>
  )
}

export default About


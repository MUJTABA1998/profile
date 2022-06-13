import React from 'react'
import { MdOutlineWork } from 'react-icons/md'
import '../../css/experience.css'
import { experience } from '../../data/experience'


const Experience = () => {
  return (
    <section className="experience">
      <h1>Work Experience</h1>
      <section className='sec-1'>
      {
        experience.map((exp, index) => (
          <div className='exp-card' key={index}>
            <div className='icon'><MdOutlineWork/></div>
            <div className='exp-info'>
              <h2>{exp.title} <span>{exp.duration}</span></h2>
              <h3>{exp.employer} , {exp.city}</h3>
              <p>{exp.details}</p>
            </div>
          </div>
        ))
      }
      </section>
    </section>
  )
}

export default Experience
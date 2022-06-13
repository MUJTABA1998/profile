import React from 'react'
import { SiGitbook } from 'react-icons/si'
import { RiComputerFill } from 'react-icons/ri'
import { education, courses } from '../../data/education'
import '../../css/education.css'


const Education = () => {


  
  return (
    <section className='edu'>
      <h1>Education</h1>
      <section className='sect-1'>
        {
          education.map((item, index) =>(
            <div className='edu-card' key={index}>
              <div className='icon'><SiGitbook/></div>
              <div className='edu-info'>
                <h4>{item.duration} <span>{item.city}</span></h4>
                <h2>{item.title} <span>({item.degree})</span></h2>
                <h3>{item.institute}</h3>
              </div>
            </div>
          ))
        }
      </section>
      <h1 className="c-t">Courses</h1>
      <section className="sect-2">
      {
        courses.map((c, index) => (
          <div className="edu-card" key={index}>
          <div className='icon'><RiComputerFill/></div>
          <div className='edu-info'>
            <h4>{c.duration} <span>{c.city}</span></h4>
            <h2>{c.title}</h2>
            <h3>{c.institute} <span>{c.city}</span></h3>
          </div>
          </div>
        ))
      }
      </section>
    </section>
  )
}

export default Education
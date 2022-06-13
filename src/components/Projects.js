import React from 'react'
import '../css/projects.css'
import { projects } from '../data/projects'


const Projects = () => {
  return (
    <section className="projects" id='projects-section'>
    <h1>Projects</h1>
    <section className="project-sec">
    {
        projects.map((pr, index) => (
            <div className='pr-card' key={index}>
                <img src={pr.image} alt={pr.id}/>
                <h2>{pr.title}</h2>
            </div>
        ))
    }
    </section>
    </section>
  )
}

export default Projects
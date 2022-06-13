import React from 'react'
import '../../css/skills.css'
import { SiHtml5, SiCss3, SiAdobephotoshop,SiJavascript,SiSass,SiBootstrap,  SiAdobexd,SiAdobedreamweaver,SiDocker, SiKubernetes,SiPhp ,SiLaravel,SiPython,SiFlask,SiPwa,SiGatsby } from 'react-icons/si'

const Skill = () => {
  return (
    <section className='skill'>
      <h1>Professional Skills</h1>
      <section className='skill-pro'>
        <div className='skill-card'>
          <h3>React Js</h3>
          <h1>90%</h1>
          <div>
            <h5><span>30+</span> project completed</h5>
          </div>
        </div>
        <div className='skill-card'>
          <h3>Node Js</h3>
          <h1>80%</h1>
          <div>
            <h5><span>50+</span> project completed</h5>
          </div>
        </div>
      <div className='skill-card'>
          <h3>Express Js</h3>
          <h1>88%</h1>
          <div>
            <h5><span>28+</span> project completed</h5>
          </div>
        </div>
        <div className='skill-card'>
          <h3>Next Js</h3>
          <h1>81%</h1>
          <div>
            <h5><span>7+</span> project completed</h5>
          </div>
        </div>
        <div className='skill-card'>
          <h3>Mongo Db</h3>
          <h1>87%</h1>
          <div>
            <h5><span>30+</span> project completed</h5>
          </div>
        </div>
      </section>
      <h1 className="tech">Other Technical Skills</h1>
      <section className='technical-skill'>
          <SiHtml5 className='icon-skill'/>
          <SiJavascript className='icon-skill'/>
          <SiCss3 className='icon-skill'/>
          <SiBootstrap className='icon-skill'/>
          <SiAdobedreamweaver className='icon-skill'/>
          <SiAdobephotoshop className='icon-skill'/>
          <SiAdobexd className='icon-skill'/>
          <SiDocker className='icon-skill'/>
          <SiKubernetes className='icon-skill'/>
          <SiPython className='icon-skill'/>
          <SiFlask className='icon-skill'/>
          <SiPhp className='icon-skill'/>
          <SiLaravel className='icon-skill'/>
          <SiPwa className='icon-skill'/>
          <SiGatsby className='icon-skill'/>
          <SiSass className='icon-skill'/>
      </section>
    </section>
  )
}

export default Skill
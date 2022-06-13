import React from 'react'
import '../css/services.css'
import {SiWebmoney} from 'react-icons/si'
import {AiFillMobile, AiOutlineAntDesign} from 'react-icons/ai'


const Services = () => {
  return (
    <section className="services" id='services-section'>
      <h1>Services</h1>
      <section className="services-sec">
        <div className="ser-card">
           <SiWebmoney className='icon'/>
           <h2>Web App Development</h2>
           <p>We build scalable responsive and highly interactive web apps that are cross browser compatible.</p>
        </div>
        <div className="ser-card">
           <AiFillMobile className='icon'/>
           <h2>Mobile App Development</h2>
           <p>We build smart hybrid mobile apps for both android & iOS with high performance and reusability.</p>
        </div>
        <div className="ser-card">
           <AiOutlineAntDesign className='icon'/>
           <h2>UI/UX Designing</h2>
           <p>We create the art of modern era that can give life to product ideas and give improved user experience.</p>
        </div>
      </section>
    </section>
  )
}

export default Services

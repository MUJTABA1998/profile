import React from 'react'
import '../../css/bio.css'

const Bio = () => {
  return (
    <section className='biography'>
      <h1>Mujtaba Asif <span>Mern Stack developer</span></h1>
      <p>
       Passionate and professional web developer with 2+ year of experience with a sound knowledge
       of industry. Proficient and assortment of technologies, including JavaScript, React JS, Next JS, Node JS, Python,
       and Database. Able to effectively self-manage during independent projects as well as collaborate in a team setting. 
      </p>
      <ul>
        <li>Date of Birth : <span>16/06/1998</span></li>
        <li>Address : <span>Faisalabad, Punjab, Pakistan</span></li>
        <li>Email : <span>mianmujtabaasif1@gmail.com</span></li>
        <li>Phone : <span>+92 304-6578361</span></li>
      </ul>
      <a href='#' download='Mujtaba.pdf'>Download CV</a>
    </section>
  )
}

export default Bio
import React from 'react'
import './about.scss'
import { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const variants = {
    initial: {
      y: 500,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        staggerChildren: 0.1,
      },
    },
  };

const About = () => {
  return (
    <motion.div className="div"  variants={variants}
    initial="initial"
    whileInView="animate">
        
        <h1>About Me</h1>
    <div className='about'>
        
      <div className='education'>
                <h2>Education</h2>
        <ul>
           <li> <h3>BTech in Computer Science and Engineering</h3></li>

            Indian Institute Of Information Technology, Sonepat (2021-2025)
           <br /> CGPA: 8.8
            <li><h3>Class 12, Science (CBSE BOARD), Haryana</h3></li>

            SR Century Public School, Bahadurgarh (2018-2020)
           <br /> Percentage: 95.00
            <li><h3> Class 10, Science (CBSE BOARD), Haryana</h3></li>

            SR Century Public School, Bahadurgarh (2016-2018)
           <br /> Percentage: 94.8
            </ul>
      </div>
        <div className="skills">
       <h2> Technical Skills</h2>
       <ul>
              <li>  <b>Frontend:</b> HTML, CSS, JavaScript, React.js</li>
              <li> <b>API Management:</b> ASP.NET API, Postman</li>
              <li> <b>Backend:</b> DOTNET CORE</li>
              <li> <b>Database:</b> MS SQL Server, MongoDB</li>
              <li> <b>Cloud:</b> Azure Integration Services, Azure Messaging Services</li>
              <li> <b>Version Control:</b> Git, GitHub</li>
              <li><b>Languages:</b> C, C++, Java, C#, JavaScript</li>
              <li><b> Data Structures and Algorithms</b></li>
              </ul>   
        </div>
    </div>
    </motion.div>
  )
}

export default About

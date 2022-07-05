import React from 'react';
import './about.css';
import ME from '../../assets/Ashok-1.jpg';
import {FaAward} from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi';
import {VscFolderLibrary} from 'react-icons/vsc';

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt='About image' />
          </div>          
        </div>
        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>6+ months working</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>Worldwide</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>
          </div>

          <p>
            I'm a passionate Frontend Developer using web technologies to build amazing
            products and focusing on solving problems for different niches and different
            industries using the power of technology.
            I will love to hear from you. Whether it's a project, job opportunity, or 
            just a chat. Feel free to contact me.
          </p> 

          <a href='#contact' className='btn btn-primary'>Let's Talk</a>         
        </div>
      </div>
    </section>
  )
}

export default About;
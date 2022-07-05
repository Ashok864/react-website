import React from 'react';
import './services.css';
import {BiCheck} from 'react-icons/bi';

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className='container services__container'>
        <article className='service'>
          <div className='service__head'>
            <h3>UI/UX Design</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Design isn't just what a product looks like</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>And feel like on the outside, design is our creative</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>I value simple content structure of UI design.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Clean design patterns and thoughtful interactions.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>I strive to design with development convertions.</p>
            </li>
            
          </ul>
        </article>

        {/* End of UI/UX */}

        <article className='service'>
          <div className='service__head'>
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>With a strong foundation in computer science.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>I'm passionate about web design and development.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>And intersted in mobile application development.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>As I grow as a developer, I hope to write clean,</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Reusable code that can be used by others.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>And leveraged to create beautifull software.</p>
            </li>
          </ul>
        </article>

        {/* End of 2nd UI/UX */}

        <article className='service'>
          <div className='service__head'>
            <h3>Mentor</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>I genuinely care about people, and love</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Helping fellow designers work on thier craft.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Every day I should learn new web techniques.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>And thinking my idea's apply with browser to fun.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>EVER POSITIVE | NEVER NEGATIVE</p>
            </li>
            
          </ul>
        </article>

        {/* End of 3rd UI/UX */}

      </div>
    </section>
  )
}

export default Services
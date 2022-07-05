import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/portfolio1.png';
import IMG2 from '../../assets/portfolio2.png';
import IMG3 from '../../assets/portfolio3.png';
import IMG4 from '../../assets/portfolio4.jpg';
import IMG5 from '../../assets/portfolio5.png';
import IMG6 from '../../assets/portfolio6.png';

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Ecommerce Online Shop',
    github: 'https://github.com/Ashok864/ecommerce-stripe',
    demo: 'https://ecommerce-stripe-omega.vercel.app/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Manusia AI Drone Technology Used By Agriculture',
    github: 'https://github.com/Ashok864/ManusiaAI',
    demo: 'https://ashok864.github.io/ManusiaAI/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Foodie',
    github: 'https://github.com/Ashok864/Foody',
    demo: 'https://ashok864.github.io/Foody/'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Admin DashBoard',
    github: 'https://github.com',
    demo: 'https://ashok3103.github.io/react-admin-dashboard/'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Movies Search',
    github: 'https://github.com/Ashok864/moviesapp',
    demo: 'https://ashokmovieapp.netlify.app'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Hotel Reservation System',
    github: 'https://github.com/Ashok3103/hotel-reservation-system',
    demo: 'https://dribbble.com/shots/18676426-Hotel-Reservation'
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className='portfolio__item-image'>
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className='portfolio__item-cta'>
                  <a href={github} className='btn' target='_blank'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
              </article>
            )
          })
        }                
      </div>
    </section>
  )
}

export default Portfolio
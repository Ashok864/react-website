import React from 'react';
import './header.css';
import CTA from './CTA';
import ME from '../../assets/Ashok.png';
import HeaderSocials from '../header/HeaderSocials';
// =========
import {useState, useEffect} from 'react';


const Header = () => {
  // =====
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = [ "Developer", "Blogger", "Freelancer", "Designer" ];
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    },delta)

    return () => { clearInterval(ticker)};
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta /2)
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if(isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  }

  // ====
  return (
    <header>
      <div className='container header__container'>
        <h5>Hello I'm</h5>
        <h1>Ashok Kumar</h1>
        <h5 className='text-light' style={{fontSize: '1.5rem'}}>{text}</h5>
        <CTA />
        <HeaderSocials />

        <div className='me'>
          <img src={ME} alt='me' />
        </div>

        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
    
  )
}

export default Header;
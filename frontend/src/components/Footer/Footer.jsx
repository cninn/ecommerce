import React from 'react'
import './Footer.css'
import footer from '../Assets/logo_big.png'
import { Link } from 'react-router-dom'
import ınns from '../Assets/ınsworks.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
        <img src={footer} alt="footer-logo" />
        <p>SHOPPER</p>
        </div>
    <ul className="footer-links">
        <Link target='_blank' to={'https://www.github.com/cninn'}>
        <li><i className="fa-brands fa-square-github"></i></li>
        </Link>
        <Link target='_blank' to={'https://www.linkedin.com/in/cninnmakes91'}>
        <li><i className="fa-brands fa-linkedin"></i></li>
        </Link>
        <Link target='_blank' to={'https://www.instagram.com/caninan.l'}>
        <li><i className="fa-brands fa-square-instagram"></i></li>
        </Link>
        <Link target='_blank' to={'https://www.facebook.com/cninnben'}>
        <li><i className="fa-brands fa-square-facebook"></i></li>
        </Link>
        <Link target='_blank' to={'https://twitter.com/mr2soul'}>
        <li><i className="fa-brands fa-square-x-twitter"></i></li>
        </Link>
        
    </ul>
    <div className="text">
       
      
        <span>It is a project of the <b>GreatStack </b> <img src="https://yt3.ggpht.com/dZrWJVS5N3R5R-qkneimoPXYLBC-apFge8e8q94jrMur7bLPc7PaOO1fiwPJrVfsando6fP2=s48-c-k-c0x00ffffff-no-rj" alt="" /> channel.
Re-edited by <b>byINN's</b> <img src={ınns} alt="logo-my" /> for educational purposes.</span>
<img src="https://www.rlogical.com/wp-content/uploads/2023/05/why-choose-mern-stack-for-developing-web-apps.webp" alt="mern" />
    </div>
    </div>
  )
}

export default Footer

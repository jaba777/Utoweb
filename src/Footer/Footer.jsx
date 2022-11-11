import React from 'react';
import './Footer.css';
import Logo from '../Images/Logo.png';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footer-container container">
        <div className="footer-logo">
          <img src={Logo} alt="Logo" />
        </div>

      </div>
    </footer>
  )
}

export default Footer

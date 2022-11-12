import React from 'react';
import './Header.css';
import Logo from '../Images/Logo.png';
import { Link } from 'react-router-dom';
import { FaArrowAltCircleUp } from 'react-icons/fa';

const Header = () => {
  return (
    <header>
      <div className="container container-header">
      <div className="logo">
        <Link to='/'><img src={Logo} alt="Logo" /></Link>
     </div>

     <div className="links">
        <Link to='/'>Home</Link>
        <Link to='/sing-in'>Sing in</Link>
        <Link to='/sing-up'><FaArrowAltCircleUp /> Sing up</Link>
     </div>
      </div>

    </header>
  )
}

export default Header

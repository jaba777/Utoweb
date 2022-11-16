import React,{ useEffect } from 'react';
import './Header.css';
import Logo from '../Images/Logo.png';
import { Link } from 'react-router-dom';
import { FaArrowAltCircleUp } from 'react-icons/fa';
import { BsMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";

import { handledarkMode } from '../components/darkModeActions';


const Header = () => {


  const dispatch = useDispatch();

  // calling our state from the reduxer using useSelector hook of redux
  const mode = useSelector((state) => state.darkModeReducer);

  // destructuring isdarkMode state from mode variable called using useSelector hook of redux
  const { isdarkMode } = mode;

  // function to be fired on onChange method to switch the mode
  const switchDarkMode = () => {
    isdarkMode
      ? dispatch(handledarkMode(false))
      : dispatch(handledarkMode(true));
  };
  useEffect(() => {
    //changing color of body with darkmode in useEffect
    //document.body.style.backgroundColor = isdarkMode ? "#292c35" : "#fff";
    document.body.className= isdarkMode ? "darkeffect" : "lighteffect"
  }, [isdarkMode]);


  return (
    <header>
      <div className="container container-header">
      <div className="logo">
        <Link to='/'><img src={Logo} alt="Logo" /></Link>
     </div>

     <div className="links">
      
     <div id="darkmode">

        <input
          type="checkbox"
          className="checkbox"
          id="checkbox"
          onChange={switchDarkMode}
          
          checked={isdarkMode}
        />
        <label htmlFor="checkbox" className="label">
          <BsMoonStarsFill color="white" />
          <BsFillSunFill color="yellow" />
          <div className="ball"></div>
        </label>
      </div>

        <Link to='/'>Home</Link>
        <Link to='/sing-in'>Sing in</Link>

        <Link to='/sing-up'><FaArrowAltCircleUp /> Sing up</Link>
     </div>
      </div>

    </header>
  )
}

export default Header

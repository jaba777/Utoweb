import React from 'react'
import './Contacts.css';
import { Container,Row,Col } from 'react-bootstrap';
import GoogleMaps from '../components/GoogleMaps';

const Contacts = () => {
  return (
    <>

   <div className="container-contact">

    <div className='contact-inputs-cont'>
    
     <div className="contact-inputs">
      

        <div className="contact-info">
          <h1>კონტაქტი</h1>
          <p>სამუშაო განრიგი: ორშაბათი <br /> - პარასკევი, 10:00 - 19:00</p>
          <p>ტელეფონი <span>032 223 22 88</span></p>
          <p>ელ.ფოსტა <span>info@lelo9.com</span></p>
        </div>

        <div className="inputs-box">
          <div className="inputs">
            <input type="text" placeholder='name' />
            <input type="text" placeholder='surname' />
            <input type="email" placeholder='email' />
          </div>
          <textarea name="contacts" id="contact-area" cols="30" rows="4" placeholder='text'></textarea>
          
        </div>

        <div className="contact-btn">
          <button type='submit'>submit</button>
        </div>

     </div>

    </div>
     
    
      

   

      <div className='google-aps-container'>
        <GoogleMaps/>
      </div>

  </div>
    
  

    
    </>
  )
}

export default Contacts

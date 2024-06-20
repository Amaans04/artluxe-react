import React from 'react'
import './Footer.css'
import footer_logo from '../assets/footer_logo.png'
import instagram_icon from '../assets/instagram_icon.png'
import pinterest_icon from '../assets/pinterest_icon.png'
import whatsapp_icon from '../assets/whatsapp_icon.png'
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={footer_logo} alt=''/>
        <p>ART LUXE</p>
      </div>
      <ul className='footer-links'>
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className='footer-social-icon'>
        <div className='footer-icons-container'>
        <a href="https://www.google.com" target="_blank"><img src={instagram_icon} alt="person icon" /></a>
        </div>
        <div className='footer-icons-container'>
            <img src={pinterest_icon} alt=''/>
        </div>
        <div className='footer-icons-container'>
            <img src={whatsapp_icon} alt=''/>
        </div>
      </div>
      <div className="footer-copyright">
        <hr/>
        <p> Copyright @ 2024- All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer
import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    
    <div className='footer' id='footer'>  
        <div className="footer-content">  
            <div className="footer-content-left">  
                <img src={assets.logo} alt="" />  
                <p>At DishDrop, we believe that great food should be fast, fresh, and hassle-free. Whether you're craving a quick snack or a full-course meal, we've got you covered with a wide variety of options, all delivered straight to your door in no time. With easy ordering, reliable delivery, and a focus on quality, we're here to make sure every meal is a moment worth savoring. Your cravings, our mission—delivered with care and convenience.</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                    </div> 
            </div>   
            <div className="footer-content-center">  
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>  
            <div className="footer-content-right">  
            <h2> GET IN TOUCH</h2>
            <ul>
                <li>+91-1234-567899</li>
                <li>contact@DishDrop.com</li>
            </ul>
            </div>  
        </div>  
        <hr/>
        <p className="footer-copyright">Copyright 2024  © DishDrop.com - All Right Reserved.</p>
    </div>  
   
  )
}

export default Footer
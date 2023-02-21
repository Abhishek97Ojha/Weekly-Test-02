import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <div className='footer'>
        <div className="about">
            <h2>About Us</h2>
            <p>Support Center</p>
            <p>Customer Support</p>
            <p>About Us</p>
            <p>Copyright</p>
            <img src="https://www.urbansciencemep.com/_next/static/images/logo-535171e8abb5d5b989bb3a22b706e1c1.png" alt="" />

        </div>
        <div className="information">
        <h2>Our Information</h2>
            <p>Return Policy</p>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
            <p>Site Map</p>
            <img src="https://www.urbansciencemep.com/_next/static/images/logo-535171e8abb5d5b989bb3a22b706e1c1.png" alt="" />

        </div>
        <div className="account">
        <h2>My Account</h2>
            <p>Press Inquiries</p>
            <p>Social Media</p>
            <p>Directories</p>
            <p>Images & B-roll</p>
            <img src="https://www.urbansciencemep.com/_next/static/images/logo-535171e8abb5d5b989bb3a22b706e1c1.png" alt="" />
        </div>
        <div className="contact">
        <h2>Contact</h2>
            <a href="https://www.facebook.com/">Facebook</a>
            <a href="https://in.linkedin.com/">LinkedIn</a>
            <a href="https://www.instagram.com/?__coig_restricted=1">Instagram</a>
        </div>
    </div>
  )
}

export default Footer
import React from 'react'
import './Header.css'
const Header = () => {
  return (
    <div className='header'>
        <div className="top">
            <a href="https://www.google.com/">056235271</a>
            <a href="https://www.google.com/">enquiry@urbansciencemep.com</a>
        </div>
        <div className="bottom">
            <div className="icon">
                <img src="https://www.urbansciencemep.com/_next/static/images/blackLogo-10fc2f582f155efcc2c792a97edc1f33.png" alt="" />
            </div>
            <div className="menu">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Project</li>
                    <li>Services</li>
                    <li>Blog</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className="button">
                <button>Enquire Now</button>
            </div>
        </div>
    </div>
  )
}

export default Header
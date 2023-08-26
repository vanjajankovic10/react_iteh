import React from 'react';
import { AiOutlineInstagram, AiOutlineYoutube,AiOutlineFacebook } from 'react-icons/ai';

const Footer = () => {
  return (

    <footer className="footer">
      <div className="footer-content">
        <div className="links">
            <h1 className>Follow us for more!</h1>
            <a href="https://www.instagram.com/larocheposay/">
            <AiOutlineInstagram size={24} />
            </a>
            <a href="https://www.youtube.com/">
            <AiOutlineYoutube size={24} />
            </a>
            <a href="https://www.facebook.com/">
            <AiOutlineFacebook size={24} />
            </a>
            <p>
            &copy; {new Date().getFullYear()} Skincare Temple. All rights reserved.
            </p>
        </div>
        
            <div className='about'>
                <h1>Info</h1>
                <a>About us</a>
                <a>The bestsellers</a>
                <a>Our team</a>
            </div>      
            <div className="contact">
                <h1>Contact</h1>
                <a> SkincareTemple</a>
                <a>skincaretemple@gmail.com</a>        
            </div>
        </div>
      
    </footer>
  );
};

export default Footer;

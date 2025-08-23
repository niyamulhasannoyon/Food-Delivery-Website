import React from 'react';
import './Header.css';
import { FaLinkedin, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"; // for "X" (Twitter)
import profile from '../../assets/frontend_assets/profile.jpeg'

const Header = () => {
    
    return (
        <div className='header'>
            <div className="header-container-left">
                <ul className='icons'>
                    <a href="https://www.linkedin.com/in/niyamulhasan/" target="_blank" rel="noreferrer"><FaLinkedin className='icon' /></a>
                    <a href="https://x.com/MDNiyamulHasan?t=W5mEYhqp1LWjreJQu2oR7g&s=09" target="_blank" rel="noreferrer"><FaXTwitter className='icon' /></a>
                    <a href="https://www.youtube.com/@niyamulhasan" target="_blank" rel="noreferrer"><FaYoutube className='icon' /></a>
                    <a href="https://www.facebook.com/niyamulhasanbd/" target="_blank" rel="noreferrer"><FaFacebook className='icon' /></a>
                    <a href="https://www.instagram.com/niyamulhasanbd/" target="_blank" rel="noreferrer"><FaInstagram className='icon' /></a>
                </ul>
            </div>
            <div className="header-content-center">
                <h1>Hi, i'm Niyamul Hasan</h1>
                <h3>Strategic content creator</h3>
                <p>Helping Coaches, Founders, Entrepreneurs, and Healthcare professionals <br />with conversion-driven content.</p>
                <a href="#contact"><button>Contact me </button></a>
            </div>
            <div className="header-content-right">
                <div className="image-container">
                    <img className='image' src={profile} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Header;

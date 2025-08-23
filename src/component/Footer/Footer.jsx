import React from 'react';
import './Footer.css';
//import { assets } from '../../assets/frontend_assets/assets';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <Link to='/'><h2 className='logo'>NIYAMUL HASAN</h2></Link>
                    <p>I am Niyamul Hasan, a professional video editor and filmmaker with years of experience creating high-quality TikTok, Instagram Reels, YouTube Shorts, brand videos, and promotional content. I specialize in short-form & long-form video editing, motion graphics, captions, color grading, and viral-ready content. I help brands and creators turn raw footage into engaging, scroll-stopping videos that boost engagement and grow audiences.</p>
                    <div className="social-icons">
                        {/* <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" /> */}
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+01733919156</li>
                        <li>niyamulhasanbd@gmail.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className='footer-copyright'>Copyright 2024 © Tomato.com - All Right Reserved</p>
        </div>
    );
};

export default Footer;
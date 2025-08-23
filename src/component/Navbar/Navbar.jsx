import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [menu, setMenu] = useState("home");

    return (
        <div className='navbar'>
            <div className="navbar-left">
                <Link to='/'><h2 className='logo'>NIYAMUL HASAN</h2></Link>
            </div>
            <div className="navbar-center">
                <ul className="navbar-menu">
                <Link to='/' onClick={() => setMenu("home")} className={menu=="home" ? "active":""}>Home</Link>
                <a href='#about' onClick={() => setMenu("about")} className={menu=="about" ? "active":""}>About</a>
                <a href='#skills' onClick={() => setMenu("skills")} className={menu=="skills" ? "active":""}>Skills</a>
                <a href='#works' onClick={() => setMenu("works")} className={menu=="works" ? "active":""}>Works</a>
                <a href='#explore-menu' onClick={() => setMenu("menu")} className={menu=="menu" ? "active":""}>Services</a>
                <a href='#reviews' onClick={() => setMenu("reviews")} className={menu=="reviews" ? "active":""}>Reviews</a>
                <a href='#faq' onClick={() => setMenu("faq")} className={menu=="faq" ? "active":""}>FAQ</a>
                <a href='#footer' onClick={() => setMenu("contact-us")} className={menu=="contact-us" ? "active":""}>Contact us</a>
                <a onClick={() => setMenu("bookCall")} className={menu=="bookCall" ? "active":""} href="mailto:niyamulhasan1089@gmail.com">Book a call</a>
            </ul>
            </div>
        </div>
    );
};

export default Navbar;
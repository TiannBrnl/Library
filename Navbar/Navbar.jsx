import React, { useEffect, useState } from 'react';
import logo from '../../assets/relogo.png';
import icon from '../../assets/icon.png';
import './Navbar.css';

function Header() {
 
    const [sticky, setSticky] =useState(false);
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(window.scrollY > 50) {
                setSticky(true);
            } else {
                setSticky(false);
            }
        });
    }, []);
    const [mobileMenu, setMobileMenu]= useState(false);
    const toggleMenu = () => {
        mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
    }

    return (
        
        <header>
            <nav className={`container ${sticky? 'dark-nav' : ''}`}>
                <img src={logo} alt="Logo" className='log' />
                <ul className={mobileMenu?'':'hide-mobile-menu'}>
                    <li><a href="#home-section">Home</a></li>
                    <li><a href="#books-section">Books</a></li>
                    <li><a href="#about-us">About Us</a></li>
                    <li><a href="#contact-us">Contact</a></li>
                </ul>
                <img src={icon} alt="" className='menu-icon' onClick={toggleMenu} />
            </nav>
        </header>
    );
}

export default Header;
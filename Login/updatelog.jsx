import React, { useEffect, useState } from 'react';
import logo from '../../assets/relogo.png';
import icon from '../../assets/icon.png';
import './Navbar.css';
import LoginPop from '../Login/LoginPop'; 

function Header() {
    const [sticky, setSticky] = useState(false);
    const [mobileMenu, setMobileMenu] = useState(false);
    const [showLogin, setShowLogin] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                setSticky(true);
            } else {
                setSticky(false);
            }
        });
    }, []);

    const toggleMenu = () => {
        setMobileMenu(!mobileMenu);
    };

    return (
        <header>
            <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
                <img src={logo} alt="Logo" className='log' />
                <div className="nav-links">
                    <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
                        <li><a href="#home-section">Home</a></li>
                        <li><a href="#books-section">Books</a></li>
                        <li><a href="#about-us">About Us</a></li>
                        <li><a href="#contact-us">Contact</a></li>
                        <li><button className='login-button' onClick={() => setShowLogin(true)}>Login</button></li>
                    </ul>
                </div>
                <img src={icon} alt="" className='menu-icon' onClick={toggleMenu} />
            </nav>
            {showLogin && <LoginPop setShowLogin={setShowLogin} />}
        </header>
    );
}

export default Header;

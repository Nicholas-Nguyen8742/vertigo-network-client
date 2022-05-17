import './Header.scss';
import logo from "../../assets/images/logo.png";
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Header() {
    return (
        <header className='header'>
            <Link to="/">
                <img className='header__logo' src={logo} alt="Vertigo Network Logo"/>
            </Link>
            <nav className='header__nav'>
                <ul className='header__list'>
                    <NavLink exact={true} to='/login' className="header__list-item" >Login</NavLink>
                    <NavLink to='/signup'className="header__list-item">Sign-Up</NavLink>
                </ul>
            </nav>            
        </header>
    );
}

export default Header;
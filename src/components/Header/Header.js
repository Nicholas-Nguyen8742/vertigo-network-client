import './Header.scss';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';

function Header() {
    return (
        <header className='header'>
            <Link to="/">
                <img className='header__logo' src={logo} alt="Vertigo Network Logo"/>
            </Link>
            <nav className='header__nav'>
                <ul className='header__list'>
                    <NavLink exact={true} to='/portal' className="header__list-item" >Portal</NavLink>
                </ul>
            </nav>            
        </header>
    );
}

export default Header;
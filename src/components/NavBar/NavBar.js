import './NavBar.scss';
import React from 'react';
import { NavLink } from 'react-router-dom';
import profileImg from '../../assets/images/IMG_8313.JPG';
import home from '../../assets/icons/home_icon.png';
import profile from '../../assets/icons/profile_icon.png';
import missions from '../../assets/icons/drone_icon.png';
import logout from '../../assets/icons/logout_icon.png';

export default function NavBar() {
    return (
        <nav className='navbar'>
            <img className='navbar__profile' src={profileImg} alt=""></img>
            <h3 className='navbar__user'>Mike Lopez</h3>
            <ul className='navbar__list'>
                <NavLink 
                    exact={true} 
                    activeClassName="navbar__item-active" 
                    className="navbar__item-inactive" 
                    to='/dashboard'>
                    <span className='navbar__item-bg'></span>
                    <img className="navbar__icon-home" src={home} alt=''/>
                    <h4 className='navbar__text'>Dashboard</h4>
                </NavLink>
                <NavLink 
                    activeClassName="navbar__item-active" 
                    className="navbar__item-inactive" 
                    to='/profile'>
                    <img className="navbar__icon-profile" src={profile} alt=''/>
                    Profile</NavLink> 
                <NavLink 
                    activeClassName="navbar__item-active" 
                    className="navbar__item-inactive" 
                    to='/profile'>
                    <img className="navbar__icon-drone" src={missions} alt=''/>
                    Missions</NavLink> 
            </ul>
            <div className='navbar__logout'>
                <img className="navbar__icon-logout" src={logout} alt=''/>
                <p>Logout</p>
            </div>
        </nav>
    );
}

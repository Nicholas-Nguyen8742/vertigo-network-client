import './DashboardPage.scss';
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import profileImg from '../../assets/images/IMG_8313.JPG';
import home from '../../assets/icons/home_icon.png';
import profile from '../../assets/icons/profile_icon.png';
import missions from '../../assets/icons/drone_icon.png';
import logout from '../../assets/icons/logout_icon.png';


class DashboardPage extends Component {
    state = {

    }
    
    render() {
        return (
            <main className='dashboard-page'>
                <nav className='navbar'>
                    <img className='navbar__profile' src={profileImg} alt=""></img>
                    <p className='navbar__user'>Mike Lopez</p>
                    <ul className='navbar__list'>
                        <NavLink 
                            exact={true} 
                            activeClassName="navbar__item-active" 
                            className="navbar__item-inactive" 
                            to='/dashboard'>
                            <img className="navbar__icon-home" src={home} alt=''/>
                            Dashboard</NavLink>
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
                            Profile</NavLink> 
                    </ul>
                    <div className='navbar__logout'>
                        <img className="navbar__icon" src={logout} alt=''/>
                        <p>Logout</p>
                    </div>
                </nav>


            </main>
        );
    }
}

export default DashboardPage;
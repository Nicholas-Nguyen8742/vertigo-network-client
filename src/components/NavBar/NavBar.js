import './NavBar.scss';
import React from 'react';
import { NavLink,  Redirect } from 'react-router-dom';
import profileImg from '../../assets/images/IMG_8313.JPG';
import home from '../../assets/icons/home_icon.png';
import profile from '../../assets/icons/profile_icon.png';
import missions from '../../assets/icons/drone_icon.png';
import logout from '../../assets/icons/logout_icon.png';

export default function NavBar({id}) {
    function handleLogout() {
        sessionStorage.removeItem("token");
        this.setState({
            user: null,
            failedAuth: true
        })
        return (
            <Redirect to='/login' />
        )
    };
    return (
        <nav className='navbar' id="mainNav">
            <img className='navbar__profile' src={profileImg} alt=""></img>
            <h3 className='navbar__user'>Nick Nguyen</h3>
            <ul className='navbar__list'>
                <NavLink 
                    exact={true} 
                    activeClassName="navbar__item-active" 
                    className="navbar__item-inactive" 
                    to={`/dashboard/${id}`}
                    id={id}>
                    <img className="navbar__icon-home" src={home} alt=''/>
                    <h4 className='navbar__text'>Dashboard</h4>
                </NavLink>
                <NavLink 
                    activeClassName="navbar__item-active" 
                    className="navbar__item-inactive" 
                    to={`/dashboard/${id}/profile`}
                    id={id}>
                    <img className="navbar__icon-profile" src={profile} alt=''/>
                    <h4 className='navbar__text'>Profile</h4>
                </NavLink> 
                <NavLink 
                    activeClassName="navbar__item-active" 
                    className="navbar__item-inactive" 
                    to={`/dashboard/${id}/missions`}
                    id={id}>
                    <img className="navbar__icon-drone" src={missions} alt=''/>
                    <h4 className='navbar__text'>Missions</h4>
                </NavLink> 
            </ul>
            <button className='navbar__logout' onClick={handleLogout}>
                <img className="navbar__icon-logout" src={logout} alt=''/>
                <h4 className='navbar__text'>Logout</h4>
            </button>
        </nav>
    );
}

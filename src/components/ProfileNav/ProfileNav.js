import './ProfileNav.scss';
import React from 'react';
import { NavLink } from 'react-router-dom';

function ProfileNav({ btn, id, display }) {
    return (
        <nav className='profile-nav' id='profileNav'>
            <ul className='profile-nav__list'>
                <li className='profile-nav__item'>
                    <NavLink 
                        exact={true} 
                        activeClassName="profile-nav__item-active" 
                        className="profile-nav__item-inactive"
                        to={`/dashboard/${id}/profile`}>Portfolio
                    </NavLink>
                </li>
                <li className='profile-nav__item'>
                    <NavLink 
                        exact={true} 
                        activeClassName="profile-nav__item-active" 
                        className="profile-nav__item-inactive"   
                        to={`/dashboard/${id}/profile/reviews`}>Reviews
                    </NavLink>
                </li>
                <li className='profile-nav__item'>
                    <NavLink 
                        exact={true} 
                        activeClassName="profile-nav__item-active" 
                        className="profile-nav__item-inactive"   
                        to={`/dashboard/${id}/profile/past-missions`}>Past Missions
                    </NavLink>
                </li>
            </ul>
            <button className='profile-nav__button' style={{display:`${display}`}}>Add to {btn}</button>
        </nav>
    );
}

export default ProfileNav;
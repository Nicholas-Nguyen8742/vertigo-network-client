import './ProfileNav.scss';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

function ProfileNav({ btn, id, display }) {
    return (
        <nav className='profile-nav' id='profileNav'>
            <ul className='profile-nav__list'>
                <li className='profile-nav__item'>
                    <NavLink 
                        exact={true} 
                        activeClassName="profile-nav__item-active" 
                        className="profile-nav__item-inactive"
                        to={`/dashboard/${id}/portfolio`}>Portfolio
                    </NavLink>
                </li>
                <li className='profile-nav__item'>
                    <NavLink 
                        exact={true} 
                        activeClassName="profile-nav__item-active" 
                        className="profile-nav__item-inactive"   
                        to={`/dashboard/${id}/portfolio/reviews`}>Reviews
                    </NavLink>
                </li>
                <li className='profile-nav__item'>
                    <NavLink 
                        exact={true} 
                        activeClassName="profile-nav__item-active" 
                        className="profile-nav__item-inactive"   
                        to={`/dashboard/${id}/portfolio/past-missions`}>Past Missions
                    </NavLink>
                </li>
            </ul>
            <Link to={`/dashboard/${id}/portfolio/add`}>
                <button className='profile-nav__button' style={{display:`${display}`}}>Add to {btn}</button>
            </Link>
        </nav>
    );
}

export default ProfileNav;
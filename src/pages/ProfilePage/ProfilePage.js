import './ProfilePage.scss';
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import PortfolioCard from '../../components/PortfolioCard/PortfolioCard';

export default class ProfilePage extends Component {
    state = {

    }
    render() {
        return (
            <main className='profile-page'>
                <NavBar />
                <div className='profile-main'>
                    <nav className='profile-nav' id='profileNav'>
                        <ul className='profile-nav__list'>
                            <li className='profile-nav__item'>
                                <NavLink 
                                    exact={true} 
                                    activeClassName="profile-nav__item-active" 
                                    className="profile-nav__item-inactive"
                                    to="/profile">Portfolio
                                </NavLink>
                            </li>
                            <li className='profile-nav__item'>
                                <NavLink 
                                    exact={true} 
                                    activeClassName="profile-nav__item-active" 
                                    className="profile-nav__item-inactive"   
                                    to="/profile/reviews">Reviews
                                </NavLink>
                            </li>
                        </ul>
                        <button className='profile-nav__button'>Add to Portfolio</button>
                    </nav>
                    <div className='profile-portfolio'>
                        <PortfolioCard />
                        <PortfolioCard />
                        <PortfolioCard />
                        <PortfolioCard />
                        <PortfolioCard />
                        <PortfolioCard />
                    </div>
                </div>
            </main>
        );
    }
}
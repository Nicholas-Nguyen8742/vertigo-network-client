import './ProfilePage.scss';
import React, { Component } from 'react';
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
                    <PortfolioCard />
                </div>
            </main>
        );
    }
}
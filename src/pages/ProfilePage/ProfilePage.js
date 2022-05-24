import './ProfilePage.scss';
import React, { Component } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import ProfileNav from '../../components/ProfileNav/ProfileNav';
import PortfolioDescription from '../../components/PortfolioDescription/PortfolioDescription';
import PortfolioCard from '../../components/PortfolioCard/PortfolioCard';

export default class ProfilePage extends Component {
    state = {

    }
    
    render() {
        return (
            <main className='profile-page'>
                <NavBar />
                <div className='profile-main'>
                    <PortfolioDescription />
                    <ProfileNav btn="Portfolio" />
                    <div className='profile-portfolio'>
                        <PortfolioCard />
                        <PortfolioCard />
                        <PortfolioCard />
                        <PortfolioCard />
                        <PortfolioCard />
                        <PortfolioCard />
                        <PortfolioCard />
                        <PortfolioCard />
                        <PortfolioCard />
                        <PortfolioCard />
                        <PortfolioCard />
                        <PortfolioCard />
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
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
        const id = this.props.match.params.id;
        return (
            <main className='profile-page'>
                <NavBar id={id}/>
                <div className='profile-main'>
                    <PortfolioDescription />
                    <ProfileNav id={id} btn="Portfolio" />
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
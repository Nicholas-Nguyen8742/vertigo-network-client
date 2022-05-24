import './ProfileReviewsPage.scss';
import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import ProfileNav from '../../components/ProfileNav/ProfileNav';
import PortfolioDescription from '../../components/PortfolioDescription/PortfolioDescription';

export default function ProfileReviewsPage() {
    return (
        <main className='profile-page'>
            <NavBar />
            <div className='profile-main'>
                <PortfolioDescription />
                <ProfileNav btn="Reviews" />
                <div className='profile-portfolio'>


                </div>
            </div>
        </main>
    );
}


import './ProfileReviewsPage.scss';
import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import ProfileNav from '../../components/ProfileNav/ProfileNav';
import PortfolioDescription from '../../components/PortfolioDescription/PortfolioDescription';

export default function ProfileReviewsPage() {
    return (
        <main className='profileReviews-page'>
            <NavBar />
            <div className='profileReviews-main'>
                <PortfolioDescription />
                <ProfileNav btn="Reviews" />
                <div className='profileReviews-portfolio'>
                    

                </div>
            </div>
        </main>
    );
}


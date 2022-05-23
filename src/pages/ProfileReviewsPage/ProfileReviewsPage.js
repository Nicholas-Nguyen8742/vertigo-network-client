import './ProfileReviewsPage.scss';
import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import ProfileNav from '../../components/ProfileNav/ProfileNav';

export default function ProfileReviewsPage() {
    return (
        <main className='reviews-page'>
            <NavBar />
            <div className='reviews-main'>
                <ProfileNav btn="Reviews"/>
            </div>
        </main>
    );
}


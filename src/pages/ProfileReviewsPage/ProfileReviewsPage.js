import './ProfileReviewsPage.scss';
import React, { Component } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import ProfileNav from '../../components/ProfileNav/ProfileNav';
import PortfolioDescription from '../../components/PortfolioDescription/PortfolioDescription';

export default class ProfileReviewsPage extends Component {

render(){
    const id = this.props.match.params.id;

    return (
        <main className='profileReviews-page'>
            <NavBar id={id}/>
            <div className='profileReviews-main'>
                <PortfolioDescription />
                <ProfileNav id={id} btn="Reviews" />
                <div className='profileReviews-portfolio'>
                    

                </div>
            </div>
        </main>
    );
}
}
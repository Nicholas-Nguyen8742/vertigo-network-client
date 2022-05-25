import './PortfolioDescription.scss';
import React, { Component } from 'react';
import profile from "../../assets/images/IMG_8313.JPG"

export default class PortfolioDescription extends Component {
    render() {
        return (
            <section className='portfolioDescription'>
                <div className='portfolioDescription-top'>

                </div>
                <div className='portfolioDescription-bottom'>
                    <img className='portfolioDescription__img' alt="" src={profile} />
                    <button className='portfolioDescription__btn'>Edit Profile</button>
                    <p className='portfolioDescription__body'>Orlando Florida native who loves to explore nature, rock climb, and meet new people. I have been a drone photographer and videographer for over 10 years, with experience in weddings, real estate, commercial and private sectors.</p>
                </div>
            </section>
        );
    }
}


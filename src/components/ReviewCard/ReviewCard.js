import './ReviewCard.scss';
import React from 'react';
import quote from '../../assets/icons/quote_icon.png';
import { ReviewCardStars } from '../ReviewCardStars/ReviewCardStars';
import profile from '../../assets/images/IMG_8313.JPG';


export default function ReviewCard() {
    return (
        <article className='reviewCard'>
            <div className='reviewCard-top'>
                <img src={quote} className='reviewCard__quote' alt='' />
                <ReviewCardStars key={1} rating={5} />
            </div>
            <div className='reviewCard-middle'>
                <p className='reviewCard__body'>The best drone photographer ever! My listings increased in views because of him</p>
            </div>
            <div className='reviewCard-bottom'>
                <img className='reviewCard__img' alt="" src={profile} />
                <h3 className='reviewCard__author'>Jacob Collins</h3>
                <p className='reviewCard__company'>Keller Williams Reality</p>
            </div>
        </article>
    );
}


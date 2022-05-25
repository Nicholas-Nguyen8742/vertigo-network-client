import './ReviewCard.scss';
import React from 'react';
import quote from '../../assets/icons/quote_icon.png';
import { ReviewCardStars } from '../ReviewCardStars/ReviewCardStars';

export default function ReviewCard({ firstName, lastName, profile, city, state, description, rating }) {
    return (
        <article className='reviewCard'>
            <div className='reviewCard-top'>
                <img src={quote} className='reviewCard__quote' alt='' />
                <ReviewCardStars 
                 rating={rating} />
            </div>
            <div className='reviewCard-middle'>
                <p className='reviewCard__body'>{description}</p>
            </div>
            <div className='reviewCard-bottom'>
                <img className='reviewCard__img' alt="" src={profile} />
                <h3 className='reviewCard__author'>{firstName} {lastName}</h3>
                <p className='reviewCard__company'>{city}, {state}</p>
            </div>
        </article>
    );
}


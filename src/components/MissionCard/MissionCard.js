import './MissionCard.scss';
import React from 'react';
// import profile from '../../assets/images/IMG_8313.JPG';

export default function MissionCard({firstName, lastName, profile, date, city, state }) {
    return (
        <article className='missionCard'>
            <img className='missionCard__img' src={profile} alt=''/>
            <div className='missionCard-right'>
                <h4  className='missionCard__title'>{firstName} {lastName}</h4>
                <h5 className='missionCard__specialty'>Real Estate</h5>
                <p className='missionCard__body1'>Aerial Photography</p>
                <h5 className='missionCard__location'>{city}, FL</h5>
                <h5 className='missionCard__date'>{date}</h5>
            </div>
        </article>
    );
}


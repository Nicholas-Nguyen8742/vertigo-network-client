import './MissionCard.scss';
import React from 'react';
import profile from '../../assets/images/IMG_8313.JPG';

export default function MissionCard() {
    return (
        <article className='missionCard'>
            <img className='missionCard__img' src={profile} alt=''/>
            <div className='missionCard-right'>
                <h4  className='missionCard__title'>Colton Summers</h4>
                <h5 className='missionCard__specialty'>Real Estate</h5>
                <p className='missionCard__body1'>Aerial Photography</p>
                <h5 className='missionCard__location'>Kissimmee, FL</h5>
            </div>
        </article>
    );
}


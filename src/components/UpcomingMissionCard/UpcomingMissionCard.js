import './UpcomingMissionCard.scss';
import React from 'react';

export default function MissionCard({ firstName, lastName, specialty, city, state, date, profile }) {
    return (
        <article className='missionCard'>
            <img className='missionCard__img' src={profile} alt=''/>
            <div className='missionCard-right'>
                <h4  className='missionCard__title'>{firstName} {lastName}</h4>
                <h5 className='missionCard__specialty'>{specialty}</h5>
                <p className='missionCard__body1'>Aerial Photography</p>
                <div className='missionCard-bottom'>
                    <h5 className='missionCard__location'>{city}, FL</h5>
                    <h5 className='missionCard__date'>{date}</h5>
                </div>
            </div>
        </article>
    );
}


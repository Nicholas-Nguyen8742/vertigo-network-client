import './MissionCard.scss';
import React from 'react';
import ApplicationMissionCard from '../ApplicationMissionCard/ApplicationMissionCard';

export default function MissionCard({missionID, pilotID, firstName, lastName, profile, date, city, status, specialty, display, color }) {
    return (
        <article className='missionCard'>
            <img className='missionCard__img' src={profile} alt=''/>
            <div className='missionCard-right'>
                <h4  className='missionCard__title'>{firstName} {lastName}</h4>
                <h5 className='missionCard__specialty'>{specialty}</h5>
                <p className='missionCard__body1'>Aerial Photography</p>
                <p className='missionCard__body2'
                    style={{display:`${display}`}}>{status}</p>
                <div className='missionCard-bottom'>
                    <h5 className='missionCard__location'>{city}, FL</h5>
                </div>
                <ApplicationMissionCard 
                    missionID={missionID}
                    pilotID={pilotID}/>
            </div>
        </article>
    );
}


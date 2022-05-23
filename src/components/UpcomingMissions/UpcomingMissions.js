import './UpcomingMissions.scss';
import React from 'react';
import UpcomingMissionCard from '../UpcomingMissionCard/UpcomingMissionCard';

function UpcomingMissions() {
    return (
        <section className='upcomingMissions'>
            <h2 className='upcomingMissions__title'>Upcoming Missions</h2>
            <div className='cardList'>
                <UpcomingMissionCard />
                <UpcomingMissionCard />
                <UpcomingMissionCard />
            {/* <article className='card'>
                <img className='card__img' src={profile} alt=''/>
                <div className='card-right'>
                    <h4  className='card__title'>Colton Summers</h4>
                    <h5 className='card__specialty'>Real Estate</h5>
                    <p className='card__body1'>Aerial Photography</p>
                    <h5 className='card__location'>Kissimmee, FL</h5>
                    <h5 className='card__date'>5/23/22</h5>
                </div>
            </article>
            <article className='card'>
                <img className='card__img' src={profile} alt=''/>
                <div className='card-right'>
                    <h4  className='card__title'>Colton Summers</h4>
                    <h5 className='card__specialty'>Real Estate</h5>
                    <p className='card__body1'>Aerial Photography</p>
                    <h5 className='card__location'>Kissimmee, FL</h5>
                    <h5 className='card__date'>5/23/22</h5>
                </div>
            </article>
            <article className='card'>
                <img className='card__img' src={profile} alt=''/>
                <div className='card-right'>
                    <h4  className='card__title'>Colton Summers</h4>
                    <h5 className='card__specialty'>Real Estate</h5>
                    <p className='card__body1'>Aerial Photography</p>
                    <h5 className='card__location'>Kissimmee, FL</h5>
                    <h5 className='card__date'>5/23/22</h5>
                </div>
            </article> */}
            </div>
        </section>
    );
}

export default UpcomingMissions;
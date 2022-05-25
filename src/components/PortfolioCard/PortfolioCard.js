import './PortfolioCard.scss';
import React from 'react';
import DeletePortfolioCard from '../DeletePortfolioCard/DeletePortfolioCard';

export default function PortfolioCard({ pilotID, id, img, city, state, date, client }) {
    return (
        <article className='portfolioCard'>
            <div className='portfolioCard-top' style={{backgroundImage:`url(${img})`}}>
                <DeletePortfolioCard 
                    key={id}
                    id={id}
                    pilotID={pilotID}
                    name={`${city}, ${state}`}/>
            </div>
            <div className='portfolioCard-bottom'>
                <h4 className='portfolioCard__title'>{client}</h4>
                <p className='portfolioCard__date'>Completed on {date}</p>
                <p className='portfolioCard__location'>{city}, {state}</p>
            </div>
        </article>
    );
}


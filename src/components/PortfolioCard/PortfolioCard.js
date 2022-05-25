import './PortfolioCard.scss';
import React from 'react';

export default function PortfolioCard({ img, city, state, date, client }) {
    return (
        <article className='portfolioCard'>
            <div className='portfolioCard-top' style={{backgroundImage:`url(${img})`}}>
                {/* <img className='portfolioCard__img' src={img} alt={`Images for ${client}`}/> */}
            </div>
            <div className='portfolioCard-bottom'>
                <h4 className='portfolioCard__title'>{client}</h4>
                <p className='portfolioCard__date'>Completed on {date}</p>
                <p className='portfolioCard__location'>{city}, {state}</p>
            </div>
        </article>
    );
}


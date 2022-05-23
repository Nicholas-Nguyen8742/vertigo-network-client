import './PortfolioCard.scss';
import React from 'react';

export default function PortfolioCard() {
    return (
        <article className='portfolioCard'>
            <div className='portfolioCard-top'>
            </div>
            <div className='portfolioCard-bottom'>
                <h4 className='portfolioCard__title'>National Geographic</h4>
                <p className='portfolioCard__date'>Completed on 4/22/22</p>
                <p className='portfolioCard__location'>San Diego, CA</p>
            </div>
        </article>
    );
}


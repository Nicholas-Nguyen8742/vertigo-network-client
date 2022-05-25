import './PortfolioCard.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import edit from '../../assets/icons/edit_icon.png';
import DeletePortfolioCard from '../DeletePortfolioCard/DeletePortfolioCard';

export default function PortfolioCard({ pilotID, id, img, city, state, date, client }) {
    return (
        <article className='portfolioCard'>
            <div className='portfolioCard-top' style={{backgroundImage:`url(${img})`}}>
                <Link>
                    <img className='portfolioCard__icon-edit' src={edit} alt="Edit portfolio card button"/>
                </Link>
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


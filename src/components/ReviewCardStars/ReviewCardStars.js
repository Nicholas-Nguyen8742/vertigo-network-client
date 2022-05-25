import './ReviewCardStars.scss';
import React from 'react';
import { FaStar } from 'react-icons/fa';

export const ReviewCardStars = ({ rating }) => {
    return (
        <div>
            {[...Array(5)].map((star, i) => {
                const ratingValue = i + 1;
                return (
                    <>
                        <FaStar
                            key={star}
                            className='reviewCard__star'
                            color={ratingValue <= rating ? "#FFC107" : "#E4E5E9"} />
                    </>
                )

            })}
        </div>
    );
};


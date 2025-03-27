import React from 'react';
import { FaStar } from 'react-icons/fa';

function Ratings({ rating }) {
    if (typeof rating !== 'number' || isNaN(rating)) {
        return <span>Rating not available</span>;
    }

    const normalizedRating = rating / 2; 

    const numFullStars = Math.floor(normalizedRating);
    const hasHalfStar = (normalizedRating - numFullStars) >= 0.5;
    const numEmptyStars = 5 - numFullStars - (hasHalfStar ? 1 : 0);

    return (
        <div className="star-rating" style={{ fontSize: '1em' }}>
            {[...Array(numFullStars)].map((_, index) => (
                <FaStar key={`full_${index}`} className="star" style={{ color: '#ffc107', marginRight: '2px' }} />
            ))}

            {hasHalfStar && (
                <FaStar key="half" className="star" style={{ color: '#ffc107', marginRight: '2px' }} />
            )}

            {[...Array(numEmptyStars)].map((_, index) => (
                <FaStar key={`empty_${index}`} className="star" style={{ color: '#444', marginRight: '2px' }} />
            ))}

            <span style={{ fontSize: '0.8em', marginLeft: '5px' }}>{rating} / 10</span>
        </div>
    );
}

export default Ratings;
import React from 'react';
import Ratings from './Ratings';
import './Favorite.css';

function Favorite({ movie }) {
    if (!movie) {
        return <div className="no-favorite">No movie selected.</div>;
    }

    return (
        <div className="movie-details">
            <div className="movie-details-container">
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="movie-details-poster" />
                <div className="movie-details-info">
                    <h2 className="movie-details-title">{movie.title}</h2>
                    <p className="movie-details-overview">{movie.overview}</p>
                    <div className="ratings-container">
                        <p className="movie-details-rating-label">Rating:</p>
                        <Ratings rating={movie.vote_average} />
                    </div>
                    <p className="movie-details-release-date">Release Date: {movie.release_date}</p>
                </div>
            </div>
        </div>
    );
}

export default Favorite;
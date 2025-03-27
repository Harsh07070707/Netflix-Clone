import React from 'react';
import { Link } from 'react-router-dom';
import Ratings from './Ratings';

function MovieCard({ movie }) {
    console.log('Vote Averages in MovieCard, ', movie)
    return (
        <div className="movie-card" style={{
            width: '220px',
            height: '400px',
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#181818',
            borderRadius: '5px',
            overflow: 'hidden',
            transition: 'transform 0.3s ease',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.4)',
            margin: '0 5px',
            minWidth: '220px',
            cursor: 'pointer',
            position: 'relative', 
        }}>
            <Link to={`/movie/${movie.id}`} style={{
                textDecoration: 'none',
                color: 'white',
                display: 'block', 
                height: '100%'
            }}>
                <img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.title} className="movie-card-image" style={{
                    width: '100%',
                    height: '70%',
                    objectFit: 'cover',
                    display: 'block',
                    transition: 'transform 0.3s ease'
                }} />

                <div style={{
                    padding: '10px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    height: '30%',
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.7)', 
                }}>
                    <h3 style={{
                        fontSize: '1rem',
                        fontWeight: 'bold',
                        margin: '0',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                        color: 'white', 
                    }}>{movie.title}</h3>
                    <Ratings rating={movie.vote_average} />
                </div>
            </Link>
        </div>
    );
}

export default MovieCard;
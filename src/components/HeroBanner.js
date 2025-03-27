import React, { useState } from 'react';
import './HeroBanner.css';
import SearchBar from './SearchBar';

function HeroBanner({ movie, onSearch }) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
        onSearch(event.target.value);
    };
    if (!movie) {
        return null;
    }
    return (
        <div>
            <div className="featured-movie" style={{
                position: 'relative',
                color: '#fff',
                height: '600px',
                overflow: 'hidden',
                marginBottom: '20px',
            }}>
                <div className="featured-image-container" style={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                }}>
                    <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt={movie.title} style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        zIndex: 1,
                    }} />
                    <div className="featured-overlay" style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.8) 75%, rgba(0, 0, 0, 0.9) 100%)',
                        zIndex: 2,
                    }}></div>
                </div>
                <div className="featured-content" style={{
                    position: 'absolute',
                    bottom: '100px',
                    left: '50px',
                    transform: 'translateX(0)',
                    textAlign: 'left',
                    zIndex: 3,
                    maxWidth: '800px',
                    width: '100%',
                    padding: '0 20px',
                }}>
                    <h2 className="featured-title" style={{
                        fontSize: '3.5rem',
                        fontWeight: 700,
                        marginBottom: '20px',
                        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)',
                        textAlign: 'left',
                    }}>{movie.title}</h2>
                    <p className="featured-overview" style={{
                        fontSize: '1.2rem',
                        lineHeight: 1.5,
                        marginBottom: '30px',
                        textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)',
                        textAlign: 'left',
                        maxWidth: '500px',
                        whiteSpace: 'normal',
                        wordBreak: 'break-word'
                    }}>{movie.overview}</p>
                    <div className="featured-buttons" style={{
                        display: 'flex',
                        justifyContent: 'flex-start'
                    }}>
                        <button className="featured-button play-button" style={{
                            backgroundColor: 'rgba(255, 255, 255, 0.8)',
                            border: 'none',
                            color: '#000',
                            padding: '12px 30px',
                            fontSize: '1.1rem',
                            fontWeight: 500,
                            borderRadius: '5px',
                            margin: '0 10px',
                            cursor: 'pointer',
                            transition: 'background-color 0.3s ease',
                            backgroundColor: '#fff',
                            color: '#000',
                        }}>Play</button>
                        <button className="featured-button more-info-button" style={{
                            backgroundColor: 'rgba(255, 255, 255, 0.5)',
                            border: 'none',
                            color: '#fff',
                            padding: '12px 30px',
                            fontSize: '1.1rem',
                            fontWeight: 500,
                            borderRadius: '5px',
                            margin: '0 10px',
                            cursor: 'pointer',
                            transition: 'background-color 0.3s ease',
                            backgroundColor: 'rgba(255, 255, 255, 0.5)',
                            color: '#fff',
                        }}>More Info</button>
                    </div>
                    <SearchBar onSearch={onSearch} />
                </div>
            </div>
        </div>
    );
}

export default HeroBanner;

import React, { useState, useEffect } from 'react';

function Favorites() {
    const [favoriteMovies, setFavoriteMovies] = useState([]);

    useEffect(() => {
        const storedFavorites = localStorage.getItem('favorites');
        if (storedFavorites) {
            setFavoriteMovies(JSON.parse(storedFavorites));
        }
    }, []);

    const handleRemoveFavorite = (movieId) => {
        const updatedFavorites = favoriteMovies.filter((movie) => movie.id !== movieId);
        setFavoriteMovies(updatedFavorites);
        localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    };

    return (
        <div style={{ padding: 20, color: 'white' }}>
            <h2 style={{ marginBottom: 20 }}>Favorite Movies</h2>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                {favoriteMovies.length > 0 ? (
                    favoriteMovies.map((movie) => (
                        <div key={movie.id} style={{
                            backgroundColor: '#181818',
                            borderRadius: 8,
                            padding: 16,
                            marginBottom: 16,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between'
                        }}>
                            <div style={{ flex: 1, marginRight: 16 }}>
                                <img
                                    src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
                                    alt={movie.title}
                                    style={{
                                        width: '100px',
                                        height: '150px',
                                        borderRadius: 4,
                                        objectFit: 'cover'
                                    }}
                                />
                            </div>
                            <div style={{ flex: 3 }}>
                                <h3 style={{ marginBottom: 8 }}>{movie.title}</h3>
                                <p>Rating: {movie.vote_average ? `${movie.vote_average} / 10` : 'Not available'}</p>
                                <p>Release Date: {movie.release_date || 'Not available'}</p>
                                <p>Overview: {movie.overview || 'Not available'}</p>
                            </div>
                            <button style={{
                                backgroundColor: '#e50914',
                                color: 'white',
                                border: 'none',
                                borderRadius: 4,
                                padding: '8px 16px',
                                cursor: 'pointer'
                            }} onClick={() => handleRemoveFavorite(movie.id)}>
                                Remove
                            </button>
                        </div>
                    ))
                ) : (
                    <p>No favorite movies added yet.</p>
                )}
            </div>
        </div>
    );
}

export default Favorites;
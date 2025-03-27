import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import axios from 'axios';
import './MovieDetails.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Ratings from './Ratings';

function MovieDetails({ baseUrl, apiKey, serverUrl }) {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isFavorite, setIsFavorite] = useState(false);
    const [videoLink, setVideoLink] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null);
            try {
                const movieResponse = await axios.get(`${baseUrl}/movie/${movieId}?api_key=${apiKey}`);
                if (movieResponse.status !== 200) {
                    throw new Error(`HTTP error! Status: ${movieResponse.status}`);
                }
                setMovie(movieResponse.data);

                const videosResponse = await axios.get(`${baseUrl}/movie/${movieId}/videos?api_key=${apiKey}&language=en-US`);
                if (videosResponse.status !== 200) {
                    throw new Error(`HTTP error! Status: ${videosResponse.status}`);
                }

                const youtubeLink = videosResponse.data.results.find(item => item.site === "YouTube" && item.type === "Trailer")?.key || '';
                setVideoLink(youtubeLink);
            } catch (err) {
                console.error('Error fetching movie details:', err);
                setError('Failed to load movie details.');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [movieId, baseUrl, apiKey]);

    useEffect(() => {
        const storedFavorites = localStorage.getItem('favorites');
        const favorites = storedFavorites ? JSON.parse(storedFavorites) : [];
        const isMovieInFavorites = favorites.some(favMovie => favMovie?.id === Number(movieId));

        setIsFavorite(isMovieInFavorites);
    }, [movieId]);

    const handleAddToFavorites = () => {
        let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
        const movieIdNum = Number(movieId);

        if (isFavorite) {
            favorites = favorites.filter(favMovie => favMovie.id !== movieIdNum);
        } else {
            if (movie) {
                favorites = [...favorites, movie];
            }
        }

        localStorage.setItem('favorites', JSON.stringify(favorites));
        setIsFavorite(!isFavorite);
    };

    if (loading) {
        return <div className="movie-details-loading">Loading movie details...</div>;
    }

    if (error) {
        return <div className="movie-details-error">{error}</div>;
    }

    if (!movie) {
        return <div className="movie-details-not-found">Movie not found.</div>;
    }

    const movieRating = movie.vote_average / 2;

    return (
        <div className="container" style={{ padding: 20, color: 'white' }}>
            <h2 style={{ marginBottom: 20 }}>{movie.title}</h2>
            <div className="row">
                <div className="col-md-8">
                    {videoLink ? (
                        <ReactPlayer
                            url={`https://www.youtube.com/watch?v=${videoLink}`}
                            width="100%"
                            height="360px"
                            controls={true}
                            onError={(err) => console.error("Error playing video:", err)}
                        />
                    ) : (
                        <div className="trailer-container-blank" style={{
                            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.poster_path}")`,
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                            height: "360px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            color: "white",
                            fontSize: "1.5rem",
                            fontWeight: "bold",
                            textShadow: "2px 2px 4px #000000"
                        }}>
                            No Trailer Available
                        </div>
                    )}
                    <p>Overview: {movie.overview}</p>
                    <p>Release Date: {movie.release_date}</p>
                    {movieRating ? (
                        <Ratings rating={movieRating} />
                    ) : (
                        <p>Rating not available</p>
                    )}
                    <button
                        onClick={handleAddToFavorites}
                        className={`btn ${isFavorite ? 'btn-danger' : 'btn-primary'}`}
                    >
                        {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
                    </button>
                </div>
                <div className="col-md-4">
                    <img
                        src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
                        alt={movie.title}
                        style={{
                            width: '100%',
                            height: 'auto',
                            borderRadius: 5
                        }}
                    />
                </div>
            </div>
        </div>
    );
}

export default MovieDetails;

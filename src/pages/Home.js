import React, { useState, useEffect, useCallback } from 'react';
import MovieCard from '../components/MovieCard';
import SearchBar from '../components/SearchBar';
import { fetchTrendingMovies, fetchPopularMovies, fetchTopRatedMovies, fetchNowPlayingMovies, fetchUpcomingMovies, searchMovies, fetchGenreList } from '../utils/api';
import './Home.css';
import LoadingSpinner from '../components/LoadingSpinner';


function Home() {
    const [featuredMovie, setFeaturedMovie] = useState(null);
    const [moviesByGenre, setMoviesByGenre] = useState({});
    const [searchTerm, setSearchTerm] = useState('');
    const [genreList, setGenreList] = useState([]);
    const [selectedGenre, setSelectedGenre] = useState('');
    const [loading, setLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);

    
    useEffect(() => {
        const getApi = async () => {
            try {
                const genreLst = await fetchGenreList();
                setGenreList(genreLst);
            } catch (error) {
                console.log(error);
            }
        };
        getApi();
    }, []);

    const fetchMoviesForCategory = useCallback(async (fetchFunction, genreId) => {
        setLoading(true);
        try {
            const result = await fetchFunction(1, searchTerm, genreId);
            return result;
        } catch (error) {
            console.error('Error fetching movies by category:', error);
            setErrorMessage('An unexpected error occurred.');
            return [];
        } finally {
            setLoading(false);
        }
    }, [searchTerm]);

    const loadMovies = useCallback(async (category) => {
        setLoading(true);
        try {
            const trending = await fetchMoviesForCategory(fetchTrendingMovies, category);
            const popular = await fetchMoviesForCategory(fetchPopularMovies, category);
            const topRated = await fetchMoviesForCategory(fetchTopRatedMovies, category);
            const nowPlaying = await fetchMoviesForCategory(fetchNowPlayingMovies, category);
            const upcoming = await fetchMoviesForCategory(fetchUpcomingMovies, category);
            let trendingValue = popular;
            setMoviesByGenre({
                "Trending Now": trendingValue,
                "Popular": popular,
                "Top Rated": topRated,
                "Now Playing": nowPlaying,
                "Upcoming": upcoming ? upcoming.filter(movie => new Date(movie.release_date) > new Date()) : []
            });
            setFeaturedMovie(topRated && topRated.length > 0 ? topRated[0] : null)

        } catch (error) {
            console.error("Error category loading:", error)
        } finally {
            setLoading(false);
        }
    },[searchTerm]);

    useEffect(() => {
        loadMovies(selectedGenre);
    }, [loadMovies, selectedGenre]);

    const handleSearch = async (term) => {
        setSearchTerm(term);
    };

    if (loading) {
        return <LoadingSpinner />;
    }
    const filteredCategory = (category) => {
        setSelectedGenre(category);
    }

    return (
        <div className="home" style={{ position: 'relative' }}>
            {errorMessage && <div className="error">{errorMessage}</div>}
            {featuredMovie ? (
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
                        <img src={`https://image.tmdb.org/t/p/original${featuredMovie.backdrop_path}`} alt={featuredMovie.title} style={{
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
                        }}>{featuredMovie.title}</h2>
                        <p className="featured-overview" style={{
                            fontSize: '1.2rem',
                            lineHeight: 1.5,
                            marginBottom: '30px',
                            textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)',
                            textAlign: 'left',
                            maxWidth: '500px',
                            whiteSpace: 'normal',
                            wordBreak: 'break-word'
                        }}>{featuredMovie.overview}</p>
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
                    </div>
                </div>
            ) : <div >Loading.</div>}
            <div className="search-filter-container">
                <SearchBar onSearch={handleSearch} />
            </div>
            {loading && <div className="loading">Loading movies...</div>}
            <div className="select-filter-container">
                <select className="select-control" id="selectCategory" onChange={e => {
                    filteredCategory(e?.target?.value)
                }} value={selectedGenre} style={{
                                backgroundColor: 'white',
                                color: 'black'
                            }}>
                    <option value="" key="genre-option-null">Category</option>
                    {genreList.map((genre) => (
                        <option value={genre?.id} key={genre?.id}>
                            {genre?.name}
                        </option>
                    ))}
                </select>
            </div>
            {Object.entries(moviesByGenre).map(([category, movies]) => (
                <div key={category} className="genre-row">
                    <h2 className="genre-title">{category}</h2>
                    <div className="movie-row" style={{
                        display: 'flex',
                        overflowX: 'auto',
                        paddingBottom: '10px'
                    }}>
                        {Array.isArray(movies) ? (
                            movies.map((movie) => (
                                <MovieCard key={movie.id} movie={movie} showRating={category !== 'Upcoming'} />
                            ))
                        ) : (
                            <div className="no-movies">No movies available</div>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Home;
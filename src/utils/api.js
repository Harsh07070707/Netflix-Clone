import axios from 'axios';

const API_KEY = 'b7db2801940e40fbc5fc125e7ec5d236';
const API_BASE_URL = 'https://api.themoviedb.org/3';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

export const fetchTrendingMovies = async (page = 1, searchTerm = '', category = '') => {
    try {
        const response = await axios.get(`${API_BASE_URL}/trending/all/day?api_key=${API_KEY}`);
        if (response.status !== 200) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const movies = response.data.results.map(movie => ({
            ...movie,
            imageUrl: movie.poster_path ? `${IMAGE_BASE_URL}${movie.poster_path}` : null
        }));

        return movies;
    } catch (error) {
        console.error('Error fetching trending movies from TMDB:', error);
        return { error: true, message: error.message };
    }
};

export const fetchPopularMovies = async (page = 1, searchTerm = '', category = '') => {
    try {
        let url = `${API_BASE_URL}/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&page=${page}`;

        if (searchTerm) {
            url = `${API_BASE_URL}/search/movie?api_key=${API_KEY}&query=${searchTerm}&page=${page}`;
        }
        if (category) {
            url = `${API_BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=${category}&sort_by=popularity.desc&page=${page}`;
        }
        const response = await axios.get(url);
        if (response.status !== 200) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const movies = response.data.results.map(movie => ({
            ...movie,
            imageUrl: movie.poster_path ? `${IMAGE_BASE_URL}${movie.poster_path}` : null
        }));

        return movies;
    } catch (error) {
        console.error('Error fetching popular movies from TMDB:', error);
        return { error: true, message: error.message };
    }
};

export const fetchTopRatedMovies = async (page = 1, searchTerm = '', category = '') => {
    try {
        let url = `${API_BASE_URL}/movie/top_rated?api_key=${API_KEY}&page=${page}`;

        if (searchTerm) {
            url = `${API_BASE_URL}/search/movie?api_key=${API_KEY}&query=${searchTerm}&page=${page}`;
        }
        if (category) {
            url = `${API_BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=${category}&sort_by=vote_average.desc&page=${page}`;
        }
        const response = await axios.get(url);
        if (response.status !== 200) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const movies = response.data.results.map(movie => ({
            ...movie,
            imageUrl: movie.poster_path ? `${IMAGE_BASE_URL}${movie.poster_path}` : null
        }));

        return movies;
    } catch (error) {
        console.error('Error fetching top rated movies from TMDB:', error);
        return { error: true, message: error.message };
    }
};

export const fetchNowPlayingMovies = async (page = 1, searchTerm = '', category = '') => {
    try {
        let url = `${API_BASE_URL}/movie/now_playing?api_key=${API_KEY}&page=${page}`;

        if (searchTerm) {
            url = `${API_BASE_URL}/search/movie?api_key=${API_KEY}&query=${searchTerm}&page=${page}`;
        }
        if (category) {
            url = `${API_BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=${category}&release_date.gte=2024-05-01&release_date.lte=2024-05-31&page=${page}`;
        }
        const response = await axios.get(url);
        if (response.status !== 200) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const movies = response.data.results.map(movie => ({
            ...movie,
            imageUrl: movie.poster_path ? `${IMAGE_BASE_URL}${movie.poster_path}` : null
        }));

        return movies;
    } catch (error) {
        console.error('Error fetching now playing movies from TMDB:', error);
        return { error: true, message: error.message };
    }
};

export const fetchUpcomingMovies = async (page = 1, searchTerm = '', category = '') => {
    try {
        let url = `${API_BASE_URL}/movie/upcoming?api_key=${API_KEY}&page=${page}`;

        if (searchTerm) {
            url = `${API_BASE_URL}/search/movie?api_key=${API_KEY}&query=${searchTerm}&page=${page}`;
        }
        if (category) {
            url = `${API_BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=${category}&release_date.gte=2024-06-01&release_date.lte=2024-07-01&page=${page}`;
        }
        const response = await axios.get(url);
        if (response.status !== 200) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const movies = response.data.results.map(movie => ({
            ...movie,
            imageUrl: movie.poster_path ? `${IMAGE_BASE_URL}${movie.poster_path}` : null
        }));

        return movies;
    } catch (error) {
        console.error('Error fetching upcoming movies from TMDB:', error);
        return { error: true, message: error.message };
    }
};

export const searchMovies = async (page = 1, searchTerm = '', category = '') => {
    try {
        const response = await axios.get(`${API_BASE_URL}/search/movie?api_key=${API_KEY}&query=${searchTerm}&page=${page}`);
        if (response.status !== 200) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const movies = response.data.results.map(movie => ({
            ...movie,
            imageUrl: movie.poster_path ? `${IMAGE_BASE_URL}${movie.poster_path}` : null
        }));

        return movies;
    } catch (error) {
        console.error('Error searching movies from TMDB:', error);
        return { error: true, message: error.message };
    }
};

export const fetchMovieDetails = async (movieId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/movie/${movieId}?api_key=${API_KEY}`);
    if (response.status !== 200) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const movie = {
      ...response.data,
      imageUrl: response.poster_path ? `${IMAGE_BASE_URL}${response.poster_path}` : null
    };
    return movie;
  } catch (error) {
    console.error('Error fetching movie details from TMDB:', error);
    return { error: true, message: error.message };
  }
};
export const fetchGenreList = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/genre/movie/list?api_key=${API_KEY}`);
        if (response.status !== 200) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.data.genres;
    } catch (error) {
        console.error('Error fetching genre list from TMDB:', error);
        return { error: true, message: error.message };
    }
};
export const fetchMoviesByGenre = async (page = 1, searchTerm = '', genreId = '') => {
    try {
        let url = `${API_BASE_URL}/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&page=${page}`;

        if (searchTerm) {
            url = `${API_BASE_URL}/search/movie?api_key=${API_KEY}&query=${searchTerm}&page=${page}`;
        }
        if (genreId) {
            url = `${API_BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=${genreId}&sort_by=popularity.desc&page=${page}`;
        }

        const response = await axios.get(url);
        if (response.status !== 200) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const movies = response.data.results.map(movie => ({
            ...movie,
            imageUrl: movie.poster_path ? `${IMAGE_BASE_URL}${movie.poster_path}` : null
        }));

        return movies;
    } catch (error) {
        console.error('Error fetching movies by genre from TMDB:', error);
        return { error: true, message: error.message };
    }
};
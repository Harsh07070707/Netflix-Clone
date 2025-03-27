import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import MovieDetails from './components/MovieDetails';
import Navbar from './components/Navbar';
import './App.css';
import { ThemeProvider } from './context/ThemeContext';
import 'bootstrap/dist/css/bootstrap.min.css'; 

function App() {

    const apiKey = 'b7db2801940e40fbc5fc125e7ec5d236'; 
    const baseUrl = 'https://api.themoviedb.org/3';  
    const serverUrl = 'YOUR_SERVER_URL';

    return (
        <ThemeProvider>
            <Router>
                <div className="App">
                    <Navbar />
                    <div className="app-container">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/favorites" element={<Favorites />} />
                            <Route path="/movie/:movieId" element={<MovieDetails baseUrl={baseUrl} apiKey={apiKey} serverUrl={serverUrl} />} />
                        </Routes>
                    </div>
                </div>
            </Router>
        </ThemeProvider>
    );
}

export default App;
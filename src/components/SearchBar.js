import React, { useState, useRef, useEffect } from 'react';
import './SearchBar.css'; 

function SearchBar({ onSearch, onFilter , onTerm}) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        onSearch(searchTerm);
    };

    return (
        <form className="search-filter-container" onSubmit={handleSearchSubmit}>
            <div className="search-bar">
                <input
                    type="text"
                    className="search-input"
                    placeholder="Search for a movie..."
                    value={searchTerm}
                    onChange={handleChange}
                />
            </div>
        </form>
    );
}

export default SearchBar;
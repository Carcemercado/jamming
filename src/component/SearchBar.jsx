// Needs search button, search input, and search results

import React from 'react';

const SearchBar = () => {
    return (
        <div>
            <input type="text" placeholder="Search for a song" />
            <button>Search</button>
        </div>
    );
};

export default SearchBar;
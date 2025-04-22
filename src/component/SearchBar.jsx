// Needs search button, search input, and search results

import React, { useState }   from 'react';
import styles from './SearchBar.module.css';

const SearchBar = () => {
    const [songName, setSongName] = useState('');

    return (
        <div>
            <form action="">
                <label htmlFor="songName">Search for a song: </label>
                <br />
                <input 
                    type="text" 
                    placeholder="Enter song name"
                    value={songName}
                    onChange={(e) => setSongName(e.target.value)} />
                <br />
                <input type="submit" value="Search" />
            </form>
            <p>You are searching for: {songName}</p>
            
        </div>
    );
};

export default SearchBar;
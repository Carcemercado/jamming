import React from 'react';
import styles from './PlayList.module.css';
import TrackList from './TrackList';


// Needs a save to Spotify button
// Needs a playlist name input
// Needs a playlist description input
// Needs a playlist image input
// Needs a playlist owner input
// Needs a playlist public/private toggle
// Needs a playlist created at input

function PlayList() {
    return (
        <div className={styles.grid}>
            <h2>PlayList</h2>
            <ul>
                <li>
                    <TrackList />
                </li>
            </ul>
        </div>
    );
}

export default PlayList;
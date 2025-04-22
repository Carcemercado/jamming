import React from 'react';
import styles from './TrackList.module.css';

function Track(props) {
    
    return (
        <div className={styles.Track}>
            <h3>{props.trackName}</h3>
            <p>{props.artist}</p>
            <p>{props.album}</p>  
        </div>
    );
}

export default Track;
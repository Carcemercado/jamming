import React from 'react';
import styles from './TrackList.module.css';
import Track from './Track';


function TrackList() {
    return (
        <div className={styles.TracList}>
            <Track
                songName="Song Name"
                artist="Artist Name"
                album="Album Name"
                onAdd={() => console.log('Add track')}
             />
        </div>
    );
}   

export default TrackList;
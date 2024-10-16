import React, { useState, useCallback } from 'react';
import LyricsDisplay from './LyricsDisplay';
import { lyrics } from '../data/lyrics';
import useMemoizedLyricsGenerator from '../hooks/useMemoizedLyricsGenerator';

const MemoizedSongLyricsGenerator = () => {
    const [currentLyrics, setCurrentLyrics] = useState(lyrics[0]);
    const [count, setCount] = useState(0);
  
    // Memoize the expensive lyrics processing
    const processedLyrics = useMemoizedLyricsGenerator(lyrics);
  
    // Memoize the generateLyrics function to prevent it from being recreated unnecessarily
    const generateLyrics = useCallback(() => {
      const randomIndex = Math.floor(Math.random() * lyrics.length);
      setCurrentLyrics(lyrics[randomIndex]);
      setCount(c => c + 1); // Update count correctly
    }, []); // Only recreate the function if lyrics change
  
    return (
      <div>
        <LyricsDisplay lyrics={currentLyrics} />
        <button onClick={generateLyrics}>Generate New Lyrics</button>
        <p>Lyrics generated {count} times</p>
        <h3>Processed Lyrics:</h3>
        <ul>
          {processedLyrics.map((lyric, index) => (
            <li key={index}>{lyric}</li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default MemoizedSongLyricsGenerator;

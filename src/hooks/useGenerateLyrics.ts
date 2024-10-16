import { useCallback } from 'react';
import { lyrics } from '../data/lyrics';

const useGenerateLyrics = (
  setCurrentLyrics: React.Dispatch<React.SetStateAction<string>>,
  setCount: React.Dispatch<React.SetStateAction<number>>,
  count: number
) => {
  return useCallback(() => {
    const randomIndex = Math.floor(Math.random() * lyrics.length);
    setCurrentLyrics(lyrics[randomIndex]);
    setCount(count + 1);
  }, [setCurrentLyrics, setCount, count]);
};

export default useGenerateLyrics;

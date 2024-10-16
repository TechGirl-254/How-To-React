import { useMemo } from 'react';

const useMemoizedLyricsGenerator = (lyrics: string[]) => {
  const processedLyrics = useMemo(() => {
    console.log("Processing lyrics..."); // This should only happen once when the app starts (or if lyrics array changes)
    return lyrics.map(lyric => lyric.toUpperCase()); // Simulating heavy computation
  }, [lyrics]);

  return processedLyrics;
};

export default useMemoizedLyricsGenerator;
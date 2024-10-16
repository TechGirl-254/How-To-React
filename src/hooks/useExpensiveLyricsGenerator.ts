const useExpensiveLyricsGenerator = (lyrics: string[]) => {
  console.log("Processing lyrics..."); // This should only happen once when the app starts (or if lyrics array changes)
  const processedLyrics = lyrics.map(lyric => lyric.toUpperCase()); // Simulating heavy computation

  return processedLyrics;
};

export default useExpensiveLyricsGenerator;

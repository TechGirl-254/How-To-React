import React, { useEffect } from 'react';


const LyricsDisplay = React.memo(({ lyrics }: { lyrics: string }) => {
    // Add a delay to the render log
    useEffect(() => {
      const timer = setTimeout(() => {
        console.log("Rendering LyricsDisplay");
      }, 1000); // Delay by 1 second
  
      return () => clearTimeout(timer); // Cleanup on unmount
    }, [lyrics]);
  
    return (
      <div>
        <h2>Random Song Lyrics:</h2>
        <p>{lyrics}</p>
      </div>
    );
  });
export default LyricsDisplay;

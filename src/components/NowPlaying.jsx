const NowPlaying = ({ trackPlaying, handlePlayTrack }) => {
  return (
    <div>
      <h1>Now Playing:</h1>
      <p>Title: {trackPlaying.title}</p>
      <p>Artist: {trackPlaying.artist}</p>
      <button onClick={() => handlePlayTrack(null)}>Close</button>
    </div>
  );
}

export default NowPlaying;
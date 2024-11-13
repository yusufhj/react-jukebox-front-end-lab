const NowPlaying = ({ trackPlaying }) => {
  return (
    <div>
      <h1>Now Playing:</h1>
      <p>Title: {trackPlaying.title}</p>
      <p>Artist: {trackPlaying.artist}</p>
    </div>
  );
}

export default NowPlaying;
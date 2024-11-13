const TrackList = ({ trackList, handleFormView, isFormOpen, updateSelectedTrack, handleRemoveTrack, handlePlayTrack }) => {

    const tracks = trackList.map((track) => (
        <div key={track._id}>
            {track.title} by {track.artist}

            <button onClick={() => handlePlayTrack(track)}>
                Play
            </button>

            <button 
                onClick={() => { updateSelectedTrack(track); handleFormView(track); }}
            >
                Edit
            </button>
            <button 
                onClick={() => handleRemoveTrack(track._id)}
            >
                Delete
            </button>
        </div>
    ));

    return (
        <>
            <div>
                <button onClick={handleFormView}>
                    {isFormOpen ? 'Close Form' : 'Add New Track'}
                </button>
            </div>

            <div>
            <h1>Track List</h1>
            {!trackList.length ? 
                <h2>No tracks available</h2> 
                : 
                <ul>{tracks}</ul>
            }
            </div>


        </>
    );
}

export default TrackList;
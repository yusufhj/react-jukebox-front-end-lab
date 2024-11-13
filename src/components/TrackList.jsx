const TrackList = ({ trackList, handleFormView, isFormOpen, updateSelectedTrack }) => {
    const tracks = trackList.map((track) => (
        <li key={track._id}>
            {track.title} by {track.artist}
            <button 
                onClick={() => { updateSelectedTrack(track); handleFormView(track); }}
            >
                Edit
            </button>
        </li>
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
import { useState, useEffect } from 'react';

// services
import * as trackService from './services/trackService';

// components
import TrackList from './components/TrackList';
import TrackForm from './components/TrackForm';
import NowPlaying from './components/NowPlaying';

const App = () => {
  const [trackList, setTrackList] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedTrack, setSelectedTrack] = useState(null);
  const [trackPlaying, setTrackPlaying] = useState(null);


  useEffect(() => {
    const fetchTracks = async () => {
        try {
        const tracks = await trackService.index();

        if (tracks.error) {
          throw new Error(tracks.error);
        }

        setTrackList(tracks);
      } catch (err) {
        console.log(err);
      }
    }
    fetchTracks();
  }, []);

  const handleFormView = (track) => {
    if (!track.title) setSelectedTrack(null);
    setIsFormOpen(!isFormOpen);
  }

  const updateSelectedTrack = (track) => {
    setSelectedTrack(track);
  }

  const handleAddTrack = async (formData) => {
    try {
      const newTrack = await trackService.create(formData);

      if (newTrack.error) {
        throw new Error(newTrack.error);
      }

      setTrackList([...trackList, newTrack]);
      setIsFormOpen(false);
    } catch (error) {
      console.log(error);
    }
  }

  const handleUpdateTrack = async (formData, trackId) => {
    try {
      const updatedTrack = await trackService.updateTrack(formData, trackId);

      if (updatedTrack.error) {
        throw new Error(updatedTrack.error);
      }

      const updatedTrackList = trackList.map((track) => {
        if (track._id !== updatedTrack._id) {
          return track;
        }
        return updatedTrack;
      })

      setTrackList(updatedTrackList);
      setSelectedTrack(updatedTrack);
      setIsFormOpen(false);
    } catch (error) {
      console.log(error);
    }
  }

  const handleRemoveTrack = async (trackId) => {
    try {
      const deletedTrack = await trackService.deleteTrack(trackId);
      if (deletedTrack.error) {
        throw new Error(deletedTrack.error);
      }

      const updatedTrackList = trackList.filter((track) => track._id !== trackId);
      setTrackList(updatedTrackList);
      setSelectedTrack(null);
      setIsFormOpen(false);

    } catch (error) {
      console.log(error);
    }
}

  const handlePlayTrack = (track) => {
    setTrackPlaying(track);
  }

  return (
    <>
        {
          isFormOpen ? (
            <TrackForm 
              selectedTrack={selectedTrack}
              handleAddTrack={handleAddTrack}
              handleUpdateTrack={handleUpdateTrack}
              />
              
            ) : (
              null
          )
        }
      <TrackList 
        trackList={trackList}
        isFormOpen={isFormOpen}
        updateSelectedTrack={updateSelectedTrack}
        handleFormView={handleFormView}
        handleRemoveTrack={handleRemoveTrack}
        handlePlayTrack={handlePlayTrack}
      />
      {
        trackPlaying ?
        <NowPlaying trackPlaying={trackPlaying} />
        :
        null
      }
    </>
  )
};

export default App;
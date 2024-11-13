import { useState, useEffect } from 'react';

// services
import * as trackService from './services/trackService';

// components
import TrackList from './components/TrackList';
import TrackForm from './components/TrackForm';

const App = () => {
  const [trackLisk, setTrackList] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);


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

  const handleFormView = () => {
    setIsFormOpen(!isFormOpen);
  }

  const handleAddTrack = async (formData) => {
    try {
      const newTrack = await trackService.create(formData);

      if (newTrack.error) {
        throw new Error(newTrack.error);
      }

      setTrackList([...trackLisk, newTrack]);
      setIsFormOpen(false);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <TrackList 
        trackList={trackLisk}
        isFormOpen={isFormOpen}
        handleFormView={handleFormView}
      />
      {
        isFormOpen ? (
          <TrackForm 
            handleAddTrack={handleAddTrack}

          />
          
        ) : null
      }
    </>
  )
};

export default App;
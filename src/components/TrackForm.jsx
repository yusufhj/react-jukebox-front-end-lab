import { useState } from "react";

const TrackForm = ({ handleAddTrack, selectedTrack, handleUpdateTrack }) => {
    const initialState = selectedTrack ? selectedTrack : {
        title: '',
        artist: ''
    };

    const [formData, setFormData] = useState(initialState);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (selectedTrack) {
            handleUpdateTrack(formData, selectedTrack._id);
        } else {
            handleAddTrack(formData);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                id = "title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Title"
                required
            />
            <input 
                type="text"
                id="artist"
                name="artist"
                value={formData.artist}
                onChange={handleChange}
                placeholder="Artist"
                required
            />
            <button type="submit">
                {selectedTrack ? 'Update Track' : 'Add New Track'}
            </button>
        </form>
    );
}

export default TrackForm;
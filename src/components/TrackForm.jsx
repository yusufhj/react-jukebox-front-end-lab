import { useState } from "react";

const TrackForm = ({ handleAddTrack }) => {
    const initialState = {
        title: '',
        artist: ''
    };

    const [formData, setFormData] = useState(initialState);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleAddTrack(formData);
        setFormData(initialState);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Title"
                required
            />
            <input 
                type="text"
                name="artist"
                value={formData.artist}
                onChange={handleChange}
                placeholder="Artist"
                required
            />
            <button type="submit">Submit</button>
        </form>
    );
}

export default TrackForm;
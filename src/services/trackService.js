const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/tracks`;

export const index = async () => {
    try {
      const res = await fetch(BASE_URL);
      const tracks = await res.json();
      return tracks
    } catch (error) {
      console.log(error);
    }
};

export const create = async (formData) => {
    try {
        const res = await fetch(BASE_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });
        const newTrack = await res.json();
        return newTrack;
    } catch (error) {
        console.log(error);
    }
}
import axios from "axios";
const FETCH_URL = "https://youtube-v31.p.rapidapi.com"

const options = {
    params: {maxResults: "50",part: 'snippet', videoId: 'M7FIvfx5J10'},
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

  export  const fetchFromAPI = async (url) => {
    const { data } = await axios.get(`${FETCH_URL}/ ${url}`, options);
    return data;
  }
  
  
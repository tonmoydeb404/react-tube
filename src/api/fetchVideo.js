import axios from "axios";

const KEY = import.meta.env.VITE_API_KEY;

export const DEFAULT_PARAMS = {
  part: "snippet",
  type: "video",
  key: KEY,
};

const fetchVideo = axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3/",
});

export default fetchVideo;

import axios from "axios";

// base url for easier api calls
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default instance;

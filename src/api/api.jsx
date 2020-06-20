import axios from "axios";

export default axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    /* Create '.env.local' file in root directory and
       add "REACT_APP_APIKEY=yourAPIkey"              */
    api_key: process.env.REACT_APP_APIKEY,
  },
});

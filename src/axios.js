import axios from "axios";
const instance = axios.create({
  baseURL: "https://cloudy-puce-colt.cyclic.cloud",
  // baseURL: "http://127.0.0.1:5001/project-8040d/us-central1/api",

  // baseURL: `{process.env.REACT_APP_base_url}/project-8040d/us-central1/api`,
});
export default instance;

import axios from "axios";
const instance = axios.create({
  baseURL: `{process.env.REACT_APP_base_url}/project-8040d/us-central1/api`,
});
export default instance;

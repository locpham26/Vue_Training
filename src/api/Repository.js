import axios from "axios";

const baseURL = "https://5b442f7c2340950014c4553f.mockapi.io/api/v1";

export default axios.create({
  baseURL,
});

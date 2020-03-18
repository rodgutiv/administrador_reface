import axios from "axios";
export const api = axios.create({
  baseURL: "http://refacenet.org:61"
});

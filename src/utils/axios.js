import axios from "axios";
import { SITE_URL, SERVER_URL } from "./requests";

var instance = axios.create({
  baseURL: SERVER_URL,
});

export default instance;

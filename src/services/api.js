import axios from "axios";

let api = axios.create({
  baseURL: "https://swapi.dev/api/planets/",
});

export default api;

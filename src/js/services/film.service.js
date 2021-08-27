import apiFilms from "../api.config/api.config.films";
import axios from "axios";



class Films {
    constructor(apiFilms) {
        this.url = apiFilms.apiUrl;
    }
   async getFilms() {
    try {
        const response = await axios.get(`${this.url}/films`)
        return response.data
    } catch(err) { 
        return Promise.reject(err)
    }
   }
}

const films = new Films(apiFilms);
export default films
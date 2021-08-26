import axios from "axios";
import api from '../api.config/api.confog'

class Locations {
    constructor(api) {
        this.url = api.url
    }
    async getSeries() {
        const response = await axios.get(`${this.url}`)
        return response
    }
}

const locations = new Locations(api);

export default locations
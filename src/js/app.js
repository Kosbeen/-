import '../css/style.css'
import locations from "../services/services";
import {titleTemplate} from "../page/page"

locations.getSeries().then(res => console.log(res.data))



import axios from "axios";

export default axios.create({
    baseURL: "https://ondullah-crm-api.herokuapp.com/",
})
import axios from "axios";

const client = axios.create({
    baseURL: "http://3.219.200.79:3000",
    headers: {
        'Content-Type': 'application/json'
    }
})

export default client;
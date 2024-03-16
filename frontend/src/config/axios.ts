import axios from "axios";

const fetch = axios.create({
    baseURL: 'http://localhost:8181'
})

export default fetch;
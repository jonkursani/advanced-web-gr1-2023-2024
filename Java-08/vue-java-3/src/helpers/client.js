import axios from "axios";

const instance = axios.create({
    baseURL: 'https://learning-resources-gr1-default-rtdb.firebaseio.com/',
    headers: {'Content-Type': 'application/json'}
});

export default instance;
import axios from "axios";

const API_URL = "http://37.192.52.216:8082";

const $api = axios.create({
    baseURL: API_URL,
    headers: {
        post: {
          "Access-Control-Allow-Origin": true,
          "Access-Control-Allow-Credentials": true
        }
    }
});

// $api.interceptors.request.use((config) => {
//     config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
//     return config;
// });

export default $api;
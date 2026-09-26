import axios from 'axios';

const API = axios.create({
    baseURL:'https://hospital-management-system-h9pv.onrender.com/api/',

});

export default API;
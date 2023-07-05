import axios from 'axios';

const axiosClient = axios.create({
    baseURL : 'http://localhost:8081/api/v1'
});

export default axiosClient;
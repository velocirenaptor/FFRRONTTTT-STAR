import axios from 'axios';

const axiosConfig = axios.create({
    baseURL: 'http://localhost:3001/api/',
    headers: {
        'Content-type': 'application/json'
    }
});

axiosConfig.interceptors.request.use(config =>{

    const token = localStorage.getItem('accessToken');
    if(token){
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}
);

axiosConfig.interceptors.response.use(
    response => response,
        error =>{
            if(error.response && error.response.status === 401){
                window.location = '/login';
            }
            return Promise.reject(error);
        }
)

export default axiosConfig;
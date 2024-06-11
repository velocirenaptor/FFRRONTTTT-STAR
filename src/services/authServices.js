
import axios from 'axios';


const API_URL = 'http://localhost:3001/api/auth';

export const register = async (username,email, password) =>{
    try{
        const response = await axios.post(`${API_URL}/register`,{
            username,
            email,
            password,
        });
        const {accesToken, refreshToken} = response.data;
        window.location.href = '/';

        return {accesToken, refreshToken};
    }catch(error){
        throw error;
    }
};

export const login = async (email, password) =>{
    try{
        const response = await axios.post(`${API_URL}/login`,{
            email,
            password,
        });
        const { accessToken, refreshToken} = response.data;
        window.location.href = '/';
        return {accessToken, refreshToken};
    }catch(error){
        throw error;
    }
};

const logout = async (user_id) =>{
    try{
        localStorage.removeItem('accesToken');
        localStorage.removeItem('refreshToken');
        window.location.href = '/';

    }catch(error){
        throw error;
    }
}

const loadCartFromServer = async (user_id) =>{
    try{
        const response = await axios.get(`${API_URL}/cart/${user_id}`);

    }catch(error){
        throw error;
    }
}

export default { 
    register,
    login,
    logout,
};
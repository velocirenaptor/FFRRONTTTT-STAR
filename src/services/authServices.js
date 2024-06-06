import React, {createContext, useState,useEffect } from 'react';
import axiosConfig from './axiosConfig';

const authContext = createContext();

const AuthProvider = ({children})=>{
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null);

        useEffect(() => {
        const accessToken = localStorage.getItem('accessToken');
        const refreshToken = localStorage.getItem('refreshToken');
        if(accessToken && refreshToken){
            axiosConfig.get('auth/profile')
            .then(response=>{
                setIsAuthenticated(true);
                setUser(response.data.user);
                
            })
            .catch(()=>{
                setIsAuthenticated(false);
                setUser(null);
            })
        }
    },[]);

    const register = (username, email, password)=>{
        try{
            const response = axiosConfig.post('auth/register',{username,email,password})
            const {accessToken, refreshToken} = response.data;
            localStorage.setItem('accessToken', accessToken);
            localStorage.setItem('refreshToken', refreshToken);
            setIsAuthenticated(true);
            setUser(response.data.user);
            return true;
        }catch(error){
            console.error("login failed", error);
            return false;
        }
    }
    const login = async (email, password)=>{
        try{
            const response = await axiosConfig.post('auth/login',{email,password});
            const {accessToken, refreshToken} = response.data;
            localStorage.setItem('accessToken', accessToken);
            localStorage.setItem('refreshToken', refreshToken);
            setIsAuthenticated(true);
            setUser(response.data.user);
            return true;
        }catch(error){
            console.error("login failed", error);
            return false;
        }
    }
    const logout = ()=>{
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        setIsAuthenticated(false);
        setUser(null);
    }
    return(
        <authContext.Provider value={{isAuthenticated, user, register, login, logout}}>
            {children}
        </authContext.Provider>
    )
}

export {authContext, AuthProvider};


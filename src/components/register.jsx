import React, { useState,useContext } from "react";

import {register} from "../services/authServices";

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setName] = useState('');
    const [error, setError] = useState('');


    const handleRegister = async (e) =>{
        e.preventDefault();
        const {accessToken,refreshToken} = await register(username,email,password);
        console.log('Access Token:',accessToken);
        console.log('Refresh Token:',refreshToken);
        localStorage.setItem('accessToken',accessToken);
        localStorage.setItem('refreshToken',refreshToken);
        if(!accessToken || !refreshToken){

            setError('No se pudo crear la cuenta');
        }else{
            window.location.href = '/';
        }
    }

    return (
        <div className="auth-form-container">
            <h2>Registrarse</h2>
        <form className="register-form" onSubmit={handleRegister}>
            <label htmlFor="name">Nombre</label>
            <input value={username} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="Escribe tu nombre" />
            <label htmlFor="email">Correo</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="tucorreo@ejemplo.com" id="email" name="email" />
            <label htmlFor="password">Contraseña</label>
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="********" id="password" name="password" />
            <button type="submit">Crear cuenta</button>
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('login')}>¿Ya tienes una cuenta? Inicia sesión aquí.</button>
    </div>
    )
}

export default Register;
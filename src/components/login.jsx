import React, { useState,useContext } from "react";
import { authContext } from "../services/authServices";

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const {login } = useContext(authContext);

    const HandleLogin = async (e)=>{
        e.preventDefault();
        const success = await login(email,password);
        if(!success){
            setError('Usuario o contraseña incorrectos');
        }else{
            window.location.href = '/';
        
        }
    }

    return (
        <div className="auth-form-container">
            <h2>Iniciar Sesión</h2>
            <form className="login-form" onSubmit={HandleLogin}>
                <label htmlFor="email">Ingresar correo</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="tucorreo@ejemplo.com" id="email" name="email" />
                <label htmlFor="password">Ingresar Contraseña</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button type="submit">Iniciar Sesión</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Crea una cuenta nueva.</button>
        </div>
    )
}
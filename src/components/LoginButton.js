import React from 'react';
import ReactDOM from 'react-dom';
import { useAuth0 } from '@auth0/auth0-react';


const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();
    return <button onClick={() => loginWithRedirect()}>Iniciar Sesión</button>;
};

export default LoginButton; 
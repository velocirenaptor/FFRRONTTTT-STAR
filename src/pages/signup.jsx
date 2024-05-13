import React, { useState } from 'react';
import '../css/signupstyle.css';
import { Login } from "../components/login.jsx";
import { Register } from "../components/register.jsx";

function Signup() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className="Signup">
      {
        currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
      }
    </div>
  );
}

export default Signup;

import React, { useState } from "react";
import "./profile.css"; // Import the CSS file
import Sidebar from "../Sidebar";

const ProfileSettings = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [profilePicture, setProfilePicture] = useState(null);

  const handleProfilePictureChange = (event) => {
    setProfilePicture(URL.createObjectURL(event.target.files[0]));
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSaveChanges = () => {
    alert("Changes saved successfully!");
  };

  const handleDeleteAccount = () => {
    alert("Account deleted s      <Footer />uccessfully!");
  };

  return (
    <div className="profile-container">
      <Sidebar />
      <div className="profile-settings">
        <h2>Ajustes de la Cuenta</h2>
        <div>
          <label htmlFor="profilePicture">Foto de Perfil:</label>
          <input
            type="file"
            id="profilePicture"
            accept="image/*"
            onChange={handleProfilePictureChange}
          />
          {profilePicture && (
            <img src={profilePicture} alt="Profile" className="profile-picture" />
          )}
        </div>
        <div>
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            placeholder="Ingresa tu nombre"
          />
        </div>
        <div>
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Ingresa tu nueva contraseña"
          />
        </div>
        <div>
          <button onClick={handleSaveChanges}>Guardar Cambios</button>
        </div>
        <div className="delete-account">
          <button onClick={handleDeleteAccount}>Borrar Cuenta</button>
        </div>
      </div>
    </div>
);
};

export default ProfileSettings;

import React, { useState } from "react";
import "./profile.css"; // Import the CSS file

const ProfileSettings = () => {
  // State variables for user information
  const [name, setName] = useState("John Doe");
  const [password, setPassword] = useState("");
  const [profilePicture, setProfilePicture] = useState(null);

  // Function to handle profile picture change
  const handleProfilePictureChange = (event) => {
    setProfilePicture(URL.createObjectURL(event.target.files[0]));
  };

  // Function to handle name change
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  // Function to handle password change
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSaveChanges = () => {
    // Implement save changes logic here
    alert("Changes saved successfully!");
  };

  // Function to handle account deletion
  const handleDeleteAccount = () => {
    // Implement account deletion logic here
    alert("Account deleted successfully!");
  };

  return (
    <div className="profile-settings"> {/* Add the class name here */}
      <h2>Profile Settings</h2>
      <div>
        <label htmlFor="profilePicture">Profile Picture:</label>
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
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={handleNameChange}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <div>
      <button onClick={handleSaveChanges}>Save Changes</button>
      </div>

      <div className="delete-account">
        <button onClick={handleDeleteAccount}>Delete Account</button>
      </div>
    </div>
  );
};

export default ProfileSettings;

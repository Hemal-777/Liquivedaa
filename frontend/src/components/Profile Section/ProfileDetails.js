import React, { useState } from 'react';

const ProfileDetails = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    // You can also add save logic here, like sending data to the server
  };

  return (
    <div className="profile-details">
      <h2>My Details</h2>
      <div className="profile-field">
        <label>First Name:</label>
        {isEditing ? (
          <input
            type="text"
            name="firstName"
            value={profileData.firstName}
            onChange={handleInputChange}
          />
        ) : (
          <span>{profileData.firstName || 'N/A'}</span>
        )}
      </div>

      <div className="profile-field">
        <label>Last Name:</label>
        {isEditing ? (
          <input
            type="text"
            name="lastName"
            value={profileData.lastName}
            onChange={handleInputChange}
          />
        ) : (
          <span>{profileData.lastName || 'N/A'}</span>
        )}
      </div>

      <div className="profile-field">
        <label>Email:</label>
        {isEditing ? (
          <input
            type="email"
            name="email"
            value={profileData.email}
            onChange={handleInputChange}
          />
        ) : (
          <span>{profileData.email || 'N/A'}</span>
        )}
      </div>

      <div className="profile-field">
        <label>Phone:</label>
        {isEditing ? (
          <input
            type="text"
            name="phone"
            value={profileData.phone}
            onChange={handleInputChange}
          />
        ) : (
          <span>{profileData.phone || 'N/A'}</span>
        )}
      </div>

      <div className="profile-field">
        <label>Address:</label>
        {isEditing ? (
          <input
            type="text"
            name="address"
            value={profileData.address}
            onChange={handleInputChange}
          />
        ) : (
          <span>{profileData.address || 'N/A'}</span>
        )}
      </div>

      {isEditing ? (
        <button className="btn btn-primary" onClick={handleSaveClick}>
          Save
        </button>
      ) : (
        <button className="btn btn-secondary" onClick={handleEditClick}>
          Edit
        </button>
      )}
    </div>
  );
};

export default ProfileDetails;

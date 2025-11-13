import React, { useState, useEffect } from "react";
import "./EditProfileModal.css";

function EditProfileModal({
  name,
  bio,
  location,
  profilePic,
  onSave,
  onClose,
}) {
  const [tempName, setTempName] = useState(name);
  const [tempBio, setTempBio] = useState(bio);
  const [tempLocation, setTempLocation] = useState(location);
  const [tempProfilePic, setTempProfilePic] = useState(profilePic);

  useEffect(() => {
    setTempName(name);
    setTempBio(bio);
    setTempLocation(location);
    setTempProfilePic(profilePic);
  }, [name, bio, location, profilePic]);

  const handleSave = () => {
    onSave({
      name: tempName,
      bio: tempBio,
      location: tempLocation,
      profilePic: tempProfilePic,
    });
  };

  return (
    <div className="modal">
      <div className="modal__content">
        <h3>Edit Profile</h3>

        {/* 🆕 Profile Picture Field */}
        <div className="modal__field">
          <label className="modal__label">Profile Picture</label>
          <img
            src={tempProfilePic}
            alt="Profile Preview"
            className="modal__profile-preview"
          />
          <input
            type="text"
            className="modal__input"
            placeholder="Enter image URL..."
            value={tempProfilePic}
            onChange={(e) => setTempProfilePic(e.target.value)}
          />
        </div>

        <div className="modal__field">
          <label className="modal__label">Name</label>
          <input
            type="text"
            className="modal__input"
            value={tempName}
            onChange={(e) => setTempName(e.target.value)}
          />
        </div>

        <div className="modal__field">
          <label className="modal__label">Bio</label>
          <textarea
            className="modal__bio-input"
            value={tempBio}
            onChange={(e) => setTempBio(e.target.value)}
          />
        </div>

        <div className="modal__field">
          <label className="modal__label">Location</label>
          <input
            type="text"
            className="modal__input"
            value={tempLocation}
            onChange={(e) => setTempLocation(e.target.value)}
          />
        </div>

        <div className="modal__actions">
          <button className="modal__save" onClick={handleSave}>
            Save
          </button>
          <button className="modal__cancel" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditProfileModal;

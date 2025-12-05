import React, { useEffect, useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import closeIcon from "../../assets/close-button.svg";
import "./EditProfileModal.css";

function EditProfileModal({
  isOpen,
  onClose,
  onSave,
  name,
  bio,
  location,
  profilePic,
  themeSongUrl,
}) {
  const [tempName, setTempName] = useState(name);
  const [tempBio, setTempBio] = useState(bio);
  const [tempLocation, setTempLocation] = useState(location);
  const [tempProfilePic, setTempProfilePic] = useState(profilePic);
  const [tempThemeSongUrl, setTempThemeSongUrl] = useState(themeSongUrl || "");

  useEffect(() => {
    if (isOpen) {
      setTempName(name);
      setTempBio(bio);
      setTempLocation(location);
      setTempProfilePic(profilePic);
      setTempThemeSongUrl(themeSongUrl || "");
    }
  }, [isOpen, name, bio, location, profilePic, themeSongUrl]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({
      name: tempName,
      bio: tempBio,
      location: tempLocation,
      profilePic: tempProfilePic,
      themeSongUrl: tempThemeSongUrl,
    });
  };

  return (
    <ModalWithForm
      name="edit-profile"
      title="Edit Profile"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      submitText="Save"
      closeIconSrc={closeIcon}
    >
      <div className="form__field">
        <label htmlFor="ep-name">Name</label>
        <input
          id="ep-name"
          className="form__input"
          type="text"
          value={tempName}
          onChange={(e) => setTempName(e.target.value)}
        />
      </div>

      <div className="form__field">
        <label htmlFor="ep-bio">Bio</label>
        <textarea
          id="ep-bio"
          className="form__textarea"
          value={tempBio}
          onChange={(e) => setTempBio(e.target.value)}
        />
      </div>

      <div className="form__field">
        <label htmlFor="ep-location">Location</label>
        <input
          id="ep-location"
          className="form__input"
          type="text"
          value={tempLocation}
          onChange={(e) => setTempLocation(e.target.value)}
        />
      </div>

      <div className="form__field">
        <label htmlFor="ep-pic">Profile Picture URL</label>
        <input
          id="ep-pic"
          className="form__input"
          type="url"
          value={tempProfilePic}
          onChange={(e) => setTempProfilePic(e.target.value)}
          placeholder="https://example.com/photo.jpg"
        />
      </div>

      {/* Theme Song URL (Spotify track link) */}
      <div className="form__field">
        <label htmlFor="ep-theme-url">
          Theme Song URL (Spotify track link)
        </label>
        <input
          id="ep-theme-url"
          className="form__input"
          type="url"
          placeholder="https://open.spotify.com/track/..."
          value={tempThemeSongUrl}
          onChange={(e) => setTempThemeSongUrl(e.target.value)}
        />
      </div>
    </ModalWithForm>
  );
}

export default EditProfileModal;

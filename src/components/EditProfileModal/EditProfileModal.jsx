import { useEffect, useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import closeIcon from "../../assets/close-icon-white.svg";
import "./EditProfileModal.css";

function EditProfileModal({
  isOpen,
  onClose,
  onSave,
  name,
  age,
  breed,
  bio,
  location,
  profilePic,
  themeSongUrl,
}) {
  const [tempName, setTempName] = useState(name);
  const [tempAge, setTempAge] = useState(age);
  const [tempBreed, setTempBreed] = useState(breed);
  const [tempBio, setTempBio] = useState(bio);
  const [tempLocation, setTempLocation] = useState(location);
  const [tempProfilePic, setTempProfilePic] = useState(profilePic);
  const [tempThemeSongUrl, setTempThemeSongUrl] = useState(themeSongUrl || "");

  const [touched, setTouched] = useState({
    name: false,
    age: false,
    profilePic: false,
  });

  useEffect(() => {
    if (isOpen) {
      setTempName(name);
      setTempAge(age);
      setTempBreed(breed);
      setTempBio(bio);
      setTempLocation(location);
      setTempProfilePic(profilePic);
      setTempThemeSongUrl(themeSongUrl || "");
      setTouched({ name: false, age: false, profilePic: false });
    }
  }, [isOpen, name, age, breed, bio, location, profilePic, themeSongUrl]);

  const isValidUrl = (url) =>
    url.startsWith("http://") || url.startsWith("https://");

  const nameError = touched.name && !tempName.trim() ? "Name is required" : "";

  const ageError =
    touched.age && tempAge && Number(tempAge) <= 0
      ? "Age must be a positive number"
      : "";

  const profilePicError =
    touched.profilePic && tempProfilePic && !isValidUrl(tempProfilePic)
      ? "Enter a valid image URL"
      : "";

  const isFormValid = tempName.trim() && !ageError && !profilePicError;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid) return;

    onSave({
      name: tempName,
      age: tempAge,
      breed: tempBreed,
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
      isValid={isFormValid}
    >
      <div className="form__field">
        <label htmlFor="ep-name">Name</label>
        <input
          id="ep-name"
          className="form__input"
          type="text"
          value={tempName}
          onChange={(e) => setTempName(e.target.value)}
          onBlur={() => setTouched((t) => ({ ...t, name: true }))}
        />
        {nameError && <span className="form__error">{nameError}</span>}
      </div>

      <div className="form__field">
        <label htmlFor="ep-age">Age</label>
        <input
          id="ep-age"
          className="form__input"
          type="number"
          min="0"
          value={tempAge}
          onChange={(e) => setTempAge(e.target.value)}
          onBlur={() => setTouched((t) => ({ ...t, age: true }))}
        />
        {ageError && <span className="form__error">{ageError}</span>}
      </div>

      <div className="form__field">
        <label htmlFor="ep-breed">Breed</label>
        <input
          id="ep-breed"
          className="form__input"
          type="text"
          value={tempBreed}
          onChange={(e) => setTempBreed(e.target.value)}
        />
      </div>

      <div className="form__field">
        <label htmlFor="ep-bio">Bio</label>
        <textarea
          id="ep-bio"
          className="form__textarea form__textarea--single"
          rows={1}
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
          onBlur={() => setTouched((t) => ({ ...t, profilePic: true }))}
          placeholder="https://example.com/photo.jpg"
        />
        {profilePicError && (
          <span className="form__error">{profilePicError}</span>
        )}
      </div>

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

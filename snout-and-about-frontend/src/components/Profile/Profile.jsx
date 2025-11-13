import React, { useState } from "react";
import EditProfileModal from "../EditProfileModal/EditProfileModal";
import closeButtonWhite from "../../assets/close-icon-white.svg";
import "./Profile.css";

function Profile() {
  const [showModal, setShowModal] = useState(false); // edit profile modal
  const [showImageModal, setShowImageModal] = useState(false); // image viewer modal
  const [profilePic, setProfilePic] = useState("https://placedog.net/500?id=1");

  // Centralized profile state
  const [name, setName] = useState("Your Name");
  const [bio, setBio] = useState("Dog lover & adventure buddy!");
  const [location, setLocation] = useState("Colorado, USA");

  const [gallery] = useState([
    "https://placedog.net/400?id=2",
    "https://placedog.net/400?id=3",
    "https://placedog.net/400?id=4",
  ]);

  const handleSaveProfile = ({ name, bio, location, profilePic }) => {
    setName(name);
    setBio(bio);
    setLocation(location);
    setProfilePic(profilePic);
    setShowModal(false);
  };

  return (
    <div className="profile">
      {/* --- HEADER SECTION --- */}
      <div className="profile__header">
        <div className="profile__avatar-container">
          <img
            src={profilePic}
            alt="Profile"
            className="profile__avatar"
            onClick={() => setShowImageModal(true)} // 👈 opens full-size modal
          />
        </div>

        <div className="profile__info">
          <h1 className="profile__name">{name}</h1>
          <p className="profile__bio">{bio}</p>
          <p className="profile__location">{location}</p>
          <button
            className="profile__edit-button"
            onClick={() => setShowModal(true)}
          >
            Edit Profile
          </button>
        </div>
      </div>

      {/* --- GALLERY SECTION --- */}
      <section className="profile__gallery">
        <h2 className="profile__section-title">Photo Gallery</h2>
        <div className="profile__gallery-grid">
          {gallery.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Gallery ${index + 1}`}
              className="profile__gallery-img"
            />
          ))}
        </div>
      </section>

      {/* --- SPOTIFY PLACEHOLDER SECTION --- */}
      <section className="profile__spotify">
        <h2 className="profile__section-title">My Dog Walk Playlist</h2>
        <div className="profile__spotify-placeholder">
          Spotify integration coming soon!
        </div>
      </section>

      {/* --- EDIT PROFILE MODAL --- */}
      {showModal && (
        <EditProfileModal
          name={name}
          bio={bio}
          location={location}
          profilePic={profilePic}
          onSave={handleSaveProfile}
          onClose={() => setShowModal(false)}
        />
      )}
      {/* --- IMAGE VIEWER MODAL --- */}
      {showImageModal && (
        <div
          className="modal"
          onClick={() => setShowImageModal(false)} // click background to close
        >
          <div
            className="modal__content modal__image-viewer"
            onClick={(e) => e.stopPropagation()} // prevent accidental close
          >
            <button
              className="modal__close-button"
              onClick={() => setShowImageModal(false)}
            >
              <img
                src={closeButtonWhite}
                alt="Close"
                className="modal__close-icon"
              />
            </button>
            <img
              src={profilePic}
              alt="Full-size Profile"
              className="modal__image"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Profile;

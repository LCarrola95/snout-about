import React, { useState } from "react";
import EditProfileModal from "../EditProfileModal/EditProfileModal";
import ImageModal from "../ImageModal/ImageModal";
import "./Profile.css";

function Profile() {
  const [showEdit, setShowEdit] = useState(false);
  const [showImage, setShowImage] = useState(false);

  const [name, setName] = useState("Your Name");
  const [bio, setBio] = useState("Dog lover & adventure buddy!");
  const [location, setLocation] = useState("Colorado, USA");
  const [profilePic, setProfilePic] = useState("https://placedog.net/500?id=1");

  const [gallery] = useState([
    "https://placedog.net/400?id=2",
    "https://placedog.net/400?id=3",
    "https://placedog.net/400?id=4",
  ]);

  const [themeSongUrl, setThemeSongUrl] = useState("");

  const getSpotifyEmbedUrl = (url) => {
    if (!url) return "";
    const match = url.match(/spotify\.com\/track\/([a-zA-Z0-9]+)/);
    if (!match) return "";
    return `https://open.spotify.com/embed/track/${match[1]}?utm_source=generator`;
  };

  const embedUrl = getSpotifyEmbedUrl(themeSongUrl);

  const handleSaveProfile = ({
    name,
    bio,
    location,
    profilePic,
    themeSongUrl,
  }) => {
    setName(name);
    setBio(bio);
    setLocation(location);
    setProfilePic(profilePic);
    setThemeSongUrl(themeSongUrl || "");
    setShowEdit(false);
  };

  return (
    <div className="profile">
      <div className="profile__header">
        <div className="profile__avatar-container">
          <img
            src={profilePic}
            alt="Profile"
            className="profile__avatar"
            onClick={() => setShowImage(true)}
          />
        </div>

        <div className="profile__info">
          <h1 className="profile__name">{name}</h1>
          <p className="profile__bio">{bio}</p>
          <p className="profile__location">{location}</p>
          <button
            className="profile__edit-button"
            onClick={() => setShowEdit(true)}
          >
            Edit Profile
          </button>
        </div>
      </div>

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

      {/* Theme Song section */}
      <section className="profile__spotify">
        <h2 className="profile__section-title">My Theme Song</h2>

        {!themeSongUrl ? (
          <div className="profile__spotify-placeholder">
            Add your dog&apos;s theme song in <strong>Edit Profile</strong> by
            pasting a Spotify track link.
          </div>
        ) : (
          <div className="profile__spotify-card">
            <p className="profile__spotify-label">Theme song</p>
            <a
              href={themeSongUrl}
              target="_blank"
              rel="noreferrer"
              className="profile__spotify-link"
            >
              Open in Spotify
            </a>

            {embedUrl && (
              <div className="profile__spotify-embed">
                <iframe
                  src={embedUrl}
                  title="Spotify theme song"
                  width="100%"
                  height="80"
                  frameBorder="0"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                ></iframe>
              </div>
            )}
          </div>
        )}
      </section>

      <EditProfileModal
        isOpen={showEdit}
        onClose={() => setShowEdit(false)}
        onSave={handleSaveProfile}
        name={name}
        bio={bio}
        location={location}
        profilePic={profilePic}
        themeSongUrl={themeSongUrl}
      />

      <ImageModal
        isOpen={showImage}
        onClose={() => setShowImage(false)}
        src={profilePic}
        alt={`${name}'s profile`}
      />
    </div>
  );
}

export default Profile;

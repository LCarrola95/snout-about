import { useState } from "react";
import EditProfileModal from "../EditProfileModal/EditProfileModal";
import ImageModal from "../ImageModal/ImageModal";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./Profile.css";

function Profile() {
  const [showEdit, setShowEdit] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [showAddPhoto, setShowAddPhoto] = useState(false);

  const [name, setName] = useState("Gus");
  const [bio, setBio] = useState("Just a pug who loves cheese!");
  const [location, setLocation] = useState("Johnstown, CO");
  const [profilePic, setProfilePic] = useState(
    "https://i.pinimg.com/originals/4e/db/ac/4edbacd4881c870c8f2edd3a5d22f639.jpg",
  );
  const [age, setAge] = useState(3);
  const [breed, setBreed] = useState("Pug");

  const [gallery, setGallery] = useState([
    "https://upload.wikimedia.org/wikipedia/commons/c/c0/Brindle_Pug.png",
    "https://i.pinimg.com/736x/fe/85/62/fe8562694b44573ea47b6bb723f035d3.jpg",
    "https://preview.redd.it/im-new-here-and-have-a-two-year-old-pug-working-on-my-memes-v0-qjng3tayjfd81.jpg?width=640&crop=smart&auto=webp&s=e6cc622402838c1c50ded8119b08eb544e627a29",
  ]);

  const [themeSongUrl, setThemeSongUrl] = useState("");
  const [newPhotoUrl, setNewPhotoUrl] = useState("");
  const [hasTouchedPhoto, setHasTouchedPhoto] = useState(false);

  const getSpotifyEmbedUrl = (url) => {
    if (!url) return "";
    const match = url.match(/spotify\.com\/track\/([a-zA-Z0-9]+)/);
    if (!match) return "";
    return `https://open.spotify.com/embed/track/${match[1]}?utm_source=generator`;
  };

  const embedUrl = getSpotifyEmbedUrl(themeSongUrl);

  const handleSaveProfile = ({
    name,
    age,
    breed,
    bio,
    location,
    profilePic,
    themeSongUrl,
  }) => {
    setName(name);
    setAge(age);
    setBreed(breed);
    setBio(bio);
    setLocation(location);
    setProfilePic(profilePic);
    setThemeSongUrl(themeSongUrl || "");
    setShowEdit(false);
  };

  const isValidPhotoUrl =
    newPhotoUrl.startsWith("http://") || newPhotoUrl.startsWith("https://");

  const addPhotoError =
    hasTouchedPhoto && !newPhotoUrl
      ? "Please enter a photo URL"
      : hasTouchedPhoto && !isValidPhotoUrl
        ? "Enter a valid URL"
        : "";

  const handleAddPhoto = (e) => {
    e.preventDefault();
    if (!isValidPhotoUrl) return;

    setGallery((prev) => [newPhotoUrl, ...prev]);
    setNewPhotoUrl("");
    setHasTouchedPhoto(false);
    setShowAddPhoto(false);
  };

  return (
    <div className="profile">
      <div className="profile__header">
        <div className="profile__avatar-container">
          <img
            src={profilePic}
            alt="Profile"
            className="profile__avatar"
            onClick={() => setSelectedImage(profilePic)}
          />
        </div>

        <div className="profile__info">
          <h1 className="profile__name">{name}</h1>
          <p className="profile__details">
            {age} years old • {breed}
          </p>
          <p className="profile__location">{location}</p>
          <p className="profile__bio">{bio}</p>

          <div className="profile__actions">
            <button
              className="profile__edit-button"
              onClick={() => setShowEdit(true)}
            >
              Edit Profile
            </button>
            <button
              className="profile__edit-button"
              onClick={() => setShowAddPhoto(true)}
            >
              Add Photo
            </button>
          </div>
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
              onClick={() => setSelectedImage(img)}
            />
          ))}
        </div>
      </section>

      <section className="profile__spotify">
        <h2 className="profile__section-title">My Theme Song</h2>

        {!themeSongUrl ? (
          <div className="profile__spotify-placeholder">
            Add your dog&apos;s theme song in <strong>Edit Profile</strong>.
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
                />
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
        age={age}
        breed={breed}
        bio={bio}
        location={location}
        profilePic={profilePic}
        themeSongUrl={themeSongUrl}
      />

      <ImageModal
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        src={selectedImage}
        alt="Expanded image"
      />

      <ModalWithForm
        name="add-photo"
        title="Add Photo"
        isOpen={showAddPhoto}
        onClose={() => {
          setShowAddPhoto(false);
          setHasTouchedPhoto(false);
          setNewPhotoUrl("");
        }}
        onSubmit={handleAddPhoto}
        submitText="Add"
        isValid={isValidPhotoUrl}
        errorText={addPhotoError}
      >
        <div className="form__field">
          <label htmlFor="photo-url">Photo URL</label>
          <input
            id="photo-url"
            className="form__input"
            type="url"
            placeholder="https://example.com/dog.jpg"
            value={newPhotoUrl}
            onChange={(e) => {
              setNewPhotoUrl(e.target.value);
              setHasTouchedPhoto(true);
            }}
            required
          />
        </div>
      </ModalWithForm>
    </div>
  );
}

export default Profile;

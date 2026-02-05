import { useState } from "react";
import "./DogModal.css";
import closeIcon from "../../assets/close-icon-white.svg";
import likeIcon from "../../assets/like.svg";
import rejectIcon from "../../assets/reject.svg";

function DogModal({ dog, onClose }) {
  const [liked, setLiked] = useState(false);
  const [rejected, setRejected] = useState(false);

  if (!dog) return null;

  const handleLike = () => {
    setLiked(true);
    setRejected(false);
  };

  const handleReject = () => {
    setRejected(true);
    setLiked(false);
  };

  return (
    <div className="dogmodal__overlay" onClick={onClose}>
      <div className="dogmodal__content" onClick={(e) => e.stopPropagation()}>
        <button className="dogmodal__close" onClick={onClose}>
          <img src={closeIcon} alt="Close" />
        </button>

        <img src={dog.image} alt={dog.name} className="dogmodal__image" />

        <h2 className="dogmodal__name">{dog.name}</h2>

        <p className="dogmodal__details">
          {dog.age} years old • {dog.breed}
        </p>

        <p className="dogmodal__location">{dog.location}</p>
        <p className="dogmodal__bio">{dog.bio}</p>

        <div className="dogmodal__actions">
          <button
            className={`dogmodal__btn dogmodal__btn--reject ${
              rejected ? "dogmodal__btn--active" : ""
            }`}
            onClick={handleReject}
          >
            <img src={rejectIcon} alt="Reject" />
          </button>

          <button
            className={`dogmodal__btn dogmodal__btn--like ${
              liked ? "dogmodal__btn--active" : ""
            }`}
            onClick={handleLike}
          >
            <img src={likeIcon} alt="Like" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default DogModal;

import React from "react";
import "./DogCard.css";
import LikeIcon from "../../assets/like.svg";
import RejectIcon from "../../assets/reject.svg";

function DogCard({ name, age, breed, location, bio, image, showButtons }) {
  return (
    <article className="dog-card">
      <img src={image} alt={`${name}`} className="dog-card__image" />

      <div className="dog-card__info">
        <h2 className="dog-card__name">{name}</h2>
        <p className="dog-card__details">
          {age} years old • {breed}
        </p>
        <p className="dog-card__location">{location}</p>
        <p className="dog-card__bio">{bio}</p>
      </div>

      {showButtons && (
        <div className="dog-card__actions">
          <button className="dog-card__button dog-card__button--reject">
            <img src={RejectIcon} alt="Reject" />
          </button>
          <button className="dog-card__button dog-card__button--like">
            <img src={LikeIcon} alt="Like" />
          </button>
        </div>
      )}
    </article>
  );
}

export default DogCard;

import "./DogCard.css";

function DogCard({ dog, onClick }) {
  const { name, age, breed, location, bio, image } = dog;

  return (
    <article className="dog-card" onClick={onClick}>
      <img src={image} alt={name} className="dog-card__image" />

      <div className="dog-card__info">
        <h2 className="dog-card__name">{name}</h2>
        <p className="dog-card__details">
          {age} years old • {breed}
        </p>
        <p className="dog-card__location">{location}</p>
        <p className="dog-card__bio">{bio}</p>
      </div>
    </article>
  );
}

export default DogCard;

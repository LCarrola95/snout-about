import React from "react";
import DogCard from "../DogCard/DogCard";
import DogFact from "../DogFact/DogFact";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
import "./Main.css";

const mockDogs = [
  {
    id: 1,
    name: "Luna",
    age: 3,
    breed: "Golden Retriever",
    location: "Denver, CO",
    bio: "Loves fetch, belly rubs, and long walks in the park.",
    image: "https://placedog.net/640/480?id=1",
  },
  {
    id: 2,
    name: "Milo",
    age: 2,
    breed: "Beagle",
    location: "Boulder, CO",
    bio: "Curious sniffer and expert napper.",
    image: "https://placedog.net/640/480?id=2",
  },
  {
    id: 3,
    name: "Daisy",
    age: 4,
    breed: "Corgi",
    location: "Fort Collins, CO",
    bio: "Short legs, big personality.",
    image: "https://placedog.net/640/480?id=3",
  },
];

function Main({ isLoggedIn, onSignupClick }) {
  return (
    <main className="main">
      {!isLoggedIn && (
        <section className="main__hero">
          <h2 className="main__hero-title">
            <span className="main__hero-icon" role="img" aria-label="paw print">
              🐾
            </span>
            Find your perfect pup match
          </h2>
        </section>
      )}
      <section className="main__content">
        <div className="dog-list">
          {mockDogs.map((dog) => (
            <DogCard
              key={dog.id}
              name={dog.name}
              age={dog.age}
              breed={dog.breed}
              location={dog.location}
              bio={dog.bio}
              image={dog.image}
              showButtons={isLoggedIn}
            />
          ))}
        </div>

        <aside className="main__aside">
          <DogFact />
        </aside>
      </section>

      {/* CTA should ONLY show when logged out */}
      {!isLoggedIn && (
        <section className="main__cta">
          <p className="main__cta-text">Want to see more adorable profiles?</p>
          <button
            type="button"
            className="main__cta-button"
            onClick={() => onSignupClick?.()}
          >
            Sign Up
          </button>
        </section>
      )}

      <Navigation isLoggedIn={isLoggedIn} />

      <Footer />
    </main>
  );
}

export default Main;

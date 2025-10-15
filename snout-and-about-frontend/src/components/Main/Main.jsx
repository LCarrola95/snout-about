import React from "react";
import { Link } from "react-router-dom";
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

function Main() {
  const isLoggedIn = false;

  return (
    <main className="main">
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
              showButtons={false}
            />
          ))}
        </div>

        <aside className="main__aside">
          <DogFact />
        </aside>
      </section>

      {!isLoggedIn && (
        <section className="main__cta">
          <p>Want to see more adorable profiles?</p>
          <Link to="/signup" className="main__cta-button">
            Sign Up
          </Link>
        </section>
      )}

      <Navigation />
      <Footer />
    </main>
  );
}

export default Main;

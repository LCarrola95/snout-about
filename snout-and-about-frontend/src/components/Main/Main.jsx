import { useState } from "react";
import DogCard from "../DogCard/DogCard";
import DogModal from "../DogModal/DogModal";
import DogFact from "../DogFact/DogFact";
import Footer from "../Footer/Footer";
import "./Main.css";

function Main({ isLoggedIn }) {
  const [selectedDog, setSelectedDog] = useState(null);

  const mockDogs = [
    {
      id: 1,
      name: "Luna",
      age: 3,
      breed: "Golden Retriever",
      location: "Denver, CO",
      bio: "Loves fetch, belly rubs, and long walks in the park.",
      image:
        "https://image.petmd.com/files/styles/863x625/public/2023-03/golden-retriever.jpg",
    },
    {
      id: 2,
      name: "Milo",
      age: 2,
      breed: "Beagle",
      location: "Boulder, CO",
      bio: "Curious sniffer and expert napper.",
      image:
        "https://image.petmd.com/files/styles/978x550/public/2022-10/beagle-dog.jpg",
    },
    {
      id: 3,
      name: "Daisy",
      age: 4,
      breed: "Corgi",
      location: "Fort Collins, CO",
      bio: "Short legs, big personality.",
      image: "https://a-z-animals.com/media/2022/01/Pembroke-welsh-corgi-1.jpg",
    },
  ];

  return (
    <main className="main">
      {!isLoggedIn ? (
        <section className="main__hero">
          <h2 className="main__hero-title">
            <span className="main__hero-icon">🐾</span>
            Find your perfect pup match
          </h2>
        </section>
      ) : (
        <section className="main__hero">
          <h2 className="main__hero-title">Meet Some Very Good Dogs</h2>
        </section>
      )}

      <section className="main__content">
        <div className="dog-list">
          {mockDogs.map((dog) => (
            <DogCard
              key={dog.id}
              dog={dog}
              onClick={() => isLoggedIn && setSelectedDog(dog)}
            />
          ))}
        </div>

        <aside className="main__aside">
          <DogFact />
        </aside>
      </section>

      <Footer />

      {selectedDog && (
        <DogModal dog={selectedDog} onClose={() => setSelectedDog(null)} />
      )}
    </main>
  );
}

export default Main;

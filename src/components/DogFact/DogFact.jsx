import { useEffect, useState } from "react";
import { getDogFacts } from "../../utils/api";
import Preloader from "../Preloader/Preloader";
import "./DogFact.css";

function DogFact() {
  const [facts, setFacts] = useState([]);
  const [currentFactIndex, setCurrentFactIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    setError("");

    getDogFacts(10)
      .then((data) => {
        setFacts(data);
        setCurrentFactIndex(0);
      })
      .catch(() => {
        setError(
          "Sorry, something went wrong fetching dog facts. Please try again later.",
        );
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const showRandomFact = () => {
    if (facts.length === 0) return;

    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * facts.length);
    } while (randomIndex === currentFactIndex);

    setCurrentFactIndex(randomIndex);
  };

  return (
    <section className="dog-fact">
      <h2 className="dog-fact__title">Did you know?</h2>

      {loading && <Preloader />}

      {!loading && error && <p className="dog-fact__error">{error}</p>}

      {!loading && !error && facts.length > 0 && (
        <p key={currentFactIndex} className="dog-fact__text">
          {facts[currentFactIndex]}
        </p>
      )}

      <button
        type="button"
        className="dog-fact__button"
        onClick={showRandomFact}
      >
        New Fact
      </button>
    </section>
  );
}

export default DogFact;

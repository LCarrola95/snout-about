import React, { useEffect, useState } from "react";
import { getDogFacts } from "../../utils/api";
import Preloader from "../Preloader/Preloader";
import "./DogFact.css";

function DogFact() {
  const [facts, setFacts] = useState([]);
  const [currentFactIndex, setCurrentFactIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch dog facts once
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
          "Sorry, something went wrong fetching dog facts. Please try again later."
        );
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  // Rotate every 6s
  useEffect(() => {
    if (facts.length <= 1) return;
    const id = setInterval(() => {
      setCurrentFactIndex((prev) => (prev + 1) % facts.length);
    }, 6000);
    return () => clearInterval(id);
  }, [facts]);

  return (
    <section className="dog-fact">
      <h2 className="dog-fact__title">Did you know?</h2>

      {/* LOADING STATE */}
      {loading && <Preloader />}

      {/* ERROR STATE */}
      {!loading && error && <p className="dog-fact__error">{error}</p>}

      {/* SUCCESS — show rotating facts */}
      {!loading && !error && facts.length > 0 && (
        <p key={currentFactIndex} className="dog-fact__text">
          {facts[currentFactIndex]}
        </p>
      )}
    </section>
  );
}

export default DogFact;

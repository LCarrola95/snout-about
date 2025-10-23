import React, { useEffect, useState } from "react";
import { getDogFacts } from "../../utils/api";
import "./DogFact.css";

function DogFact() {
  const [facts, setFacts] = useState([]);
  const [currentFactIndex, setCurrentFactIndex] = useState(0);

  // Fetch dog facts once
  useEffect(() => {
    getDogFacts(10).then((data) => {
      setFacts(data);
      setCurrentFactIndex(0);
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
      {facts.length > 0 ? (
        // key makes React remount this node so the CSS animation re-triggers
        <p key={currentFactIndex} className="dog-fact__text">
          {facts[currentFactIndex]}
        </p>
      ) : (
        <p className="dog-fact__text">Fetching some fun dog facts...</p>
      )}
    </section>
  );
}

export default DogFact;

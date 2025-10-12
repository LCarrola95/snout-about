import React from "react";
import Header from "../Header/Header";
import DogCard from "../DogCard/DogCard";
import DogFact from "../DogFact/DogFact";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
import "./Main.css";

function Main() {
  return (
    <main className="main">
      <Header />
      <section className="main-content">
        <DogCard />
        <DogFact />
      </section>
      <Navigation />
      <Footer />
    </main>
  );
}

export default Main;

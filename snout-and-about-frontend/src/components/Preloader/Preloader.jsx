import React from "react";
import "./Preloader.css";

function Preloader() {
  return (
    <div className="preloader">
      <div className="circle-preloader" />
      <p className="preloader_text">Fetching dog facts...</p>
    </div>
  );
}

export default Preloader;

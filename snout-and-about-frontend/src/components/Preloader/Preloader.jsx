import "./Preloader.css";

function Preloader() {
  return (
    <div className="preloader">
      <div className="circle-preloader" />
      <p className="preloader__text">Fetching dog facts...</p>
    </div>
  );
}

export default Preloader;

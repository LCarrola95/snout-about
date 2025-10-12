import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "../Main/Main";
import Profile from "../Profile/Profile";
import BrowsePage from "../BrowsePage/BrowsePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/browse" element={<BrowsePage />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;

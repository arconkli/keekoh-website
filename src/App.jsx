import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import KeeKohWebsite from "./KeeKohWebsite";
import MusicLinksPage from "./ItAllFalls";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<KeeKohWebsite />} />
        <Route path="/music" element={<ItAllFalls />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

import { AllPlayers, SinglePlayer, NewPlayerForm, NavBar } from "./components";
import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<AllPlayers />} />
        <Route path="/NewPlayerForm" element={<NewPlayerForm />} />
        <Route path="/players/:id" element={<SinglePlayer />} />
        <Route path="/nav" element={<NavBar />} />
      </Routes>
    </div>
  );
}

export default App;

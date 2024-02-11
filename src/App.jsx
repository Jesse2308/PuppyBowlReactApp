import { AllPlayers, SinglePlayer, NewPlayerForm, NavBar }   from "./components";
import "./App.css";
import { Routes, Route, } from "react-router-dom";
import { useState } from "react";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<AllPlayers />} />
        <Route path="/NewPlayerForm" element={<NewPlayerForm />} />
        <Route path="/players/:id" element={<SinglePlayer />} />
      </Routes>
    </div>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import { API_URL } from "../API";

const SinglePlayer = () => {
  const [player, setPlayer] = useState({});
  useEffect(() => {
    async function fetchPlayer() {
      try {
        const response = await fetch(`${API_URL}/${player.id}`);
        const data = await response.json();
        setPlayer(data.data);
      } catch (error) {
        console.error("Error:", error);
      }
    }
    fetchPlayer();
  }, []);

  return (
  );
};

export default SinglePlayer;

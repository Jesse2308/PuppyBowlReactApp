import { useEffect, useState } from "react";
import { API_URL } from "../API";
import SinglePlayer from "./SinglePlayer";

const AllPlayers = () => {
  const [players, setPlayers] = useState([]);
useEffect(() => {
    async function fetchPlayers() {
        try {
            const response = await fetch(API_URL);
            const data = await response.json();
            console.log(data.data);
        } catch (error) {
            console.error("Error:", error);
        }
    }
    fetchPlayers();
}, []);

  return (
    <div>
      <h1>All Players</h1>
      {players.map((player) => {
        return <SinglePlayer key={player.id} player={setPlayers} />;
      })}
    </div>
  );
};
export default AllPlayers;

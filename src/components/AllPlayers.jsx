import { useEffect, useState } from "react";
import { fetchAllPlayers, removePlayer } from "../API";
import { Link } from "react-router-dom";

const AllPlayers = () => {
  const [players, setPlayer] = useState(null);
  useEffect(() => {
    async function getAllPlayers() {
      const allPlayers = await fetchAllPlayers();
      // console.log(allPlayers);
      setPlayer(allPlayers);
    }
    getAllPlayers();
  });

  async function handleDelete(playerId) {
    await removePlayer(playerId);
    const response = await fetchAllPlayers();
    console.log("player deleted");
    setPlayer(response);
  }

  return (
    players && (
      <div>
        <h1>Puppy Bowl Players</h1>
        <ul>
          {players.map((player) => (
            <>
              <Link to={`/players/${player.id}`} key={player.name}>
                <img src={player.imageUrl}></img>
                <button>View Puppy Details</button>
              </Link>
              <button onClick={() => handleDelete(player.id)}>
                Delete Puppy
              </button>
            </>
          ))}
        </ul>
      </div>
    )
  );
};
export default AllPlayers;

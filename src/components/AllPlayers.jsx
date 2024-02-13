import { useEffect, useState } from "react";
import { fetchAllPlayers, removePlayer } from "../API";
import { Link } from "react-router-dom";

const AllPlayers = () => {
  const [players, setPlayer] = useState(null);
  const [input, setInput] = useState("");
  const [playersToDisplay, setPlayersToDisplay] = useState(null);

  useEffect(() => {
    async function getAllPlayers() {
      const allPlayers = await fetchAllPlayers();
      // console.log(allPlayers);
      setPlayer(allPlayers);
      setPlayersToDisplay(allPlayers);
      // what do we want playersToDisplay to be ?
    }
    getAllPlayers();
  }, []);

  async function handleDelete(playerId) {
    await removePlayer(playerId);
    const response = await fetchAllPlayers();
    console.log("player deleted");
    setPlayer(response);
    setPlayersToDisplay(response);
  }

  const handleChange = (value) => {
    setInput(value);
    if (players !== null) {
      const results = players.filter((player) =>
        player.name.toLowerCase().includes(input.toLowerCase())
      );
      console.log(value, results);
      // If value is null, playerToDisplay equal players
      // If value is not null, playerToDisplay equal results
      if (value === "") {
        setPlayersToDisplay(players);
      } else if (value !== "") {
        setPlayersToDisplay(results);
      }
    }
  };

  return (
    playersToDisplay && playersToDisplay.length > 0 ? (
      <div>
        <div>
          <input
            placeholder="Search for a Puppy"
            value={input}
            onChange={(event) => handleChange(event.target.value)}
          ></input>
          {/* <button onClick={() => setPlayersToDisplay(players)}>Search</button> */}
        </div>
        <h1>Puppy Bowl Players</h1>
        <ul>
          {playersToDisplay.map((player) => (
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
    ) : (
      <div>
        <h1>No players to display.</h1>
      </div>
    )
  );
};
export default AllPlayers;

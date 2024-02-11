import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchSinglePlayer } from "../API";

const SinglePlayer = () => {
  const [player, setPlayer] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    console.log(player, id);
    async function getSinglePlayer() {
      const dogplayer = await fetchSinglePlayer(id);
      console.log(dogplayer);
      setPlayer(dogplayer);
    }
    getSinglePlayer();
  }, []);

  return (
    <div>
      {player && (
        <div>
          <h1>Single Player View</h1>
          <ul className="singleplayercss">
            {player.id}
            {player.name}
            {player.breed}
            {player.status}
            <img src={player.imageUrl}></img>
          </ul>
        </div>
      )}
    </div>
  );
};

export default SinglePlayer;

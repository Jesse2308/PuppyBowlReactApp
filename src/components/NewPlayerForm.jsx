import { useState } from "react";
import { createPlayer } from "../API";
import { useNavigate } from "react-router-dom";

const NewPlayerForm = () => {
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [status, setStatus] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    console.log("submitting form", name, breed, status, imageUrl);
    await createPlayer(name, breed, status, imageUrl);
    navigate("/");
  }

  return (
    <div className="new-player-form">
      <h1>New Player Form</h1>
      <form className="forminfo" onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </label>
        <label>
          Breed:
          <input
            value={breed}
            onChange={(event) => setBreed(event.target.value)}
          />
        </label>
        <label>
          Status:
          <input
            value={status}
            onChange={(event) => setStatus(event.target.value)}
          />
        </label>
        <label>
          Image URL:
          <input
            value={imageUrl}
            onChange={(event) => setImageUrl(event.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default NewPlayerForm;

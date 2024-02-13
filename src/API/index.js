const API_URL =
  "https://fsa-puppy-bowl.herokuapp.com/api/2308-ACC-ET-WEB-PT-A/players";

export async function fetchAllPlayers() {
  try {
    const response = await fetch(API_URL);
    const result = await response.json();
    return result.data.players;
  } catch (error) {
    console.error("Error fetching all players", error);
  }
}
export async function fetchSinglePlayer(playerId) {
  try {
    const response = await fetch(`${API_URL}/${playerId}`);
    const result = await response.json();
    // console.log(data.data);
    return result.data.player;
  } catch (error) {
    console.error(error);
  }
}
export async function createPlayer(name, breed, status, imageUrl) {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        breed: breed,
        imageUrl: imageUrl,
        status: status,
      }),
    });
    console.log(JSON.stringify({ name: name, breed: breed }));
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}
export async function removePlayer(playerId) {
  try {
    const response = await fetch(`${API_URL}/${playerId}`, {
      method: "DELETE",
    });
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}
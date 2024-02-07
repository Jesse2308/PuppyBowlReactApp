import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/NewPlayerForm">New Player</Link>
      <Link to="/players/:id">Single Player</Link>
    </nav>
  );
};
export default NavBar;

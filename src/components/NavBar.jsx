import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/NewPlayerForm">Sign Up Form</Link>
      {/* <Link to="/players/7">Single Player</Link> */}
    </nav>
  );
};
export default NavBar;

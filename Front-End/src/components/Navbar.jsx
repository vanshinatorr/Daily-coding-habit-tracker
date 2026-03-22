import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div style={{display:"flex", gap:"20px", padding:"10px", background:"#eee"}}>

      <Link to="/">Home</Link>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/add-habit">Add Habit</Link>
      <Link to="/stats">Stats</Link>
      <Link to="/leaderboard">Leaderboard</Link>
      <Link to="/login">Login</Link>

    </div>
  );
}

export default Navbar;
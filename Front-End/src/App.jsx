import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import AddHabit from "./pages/AddHabit";
import Stats from "./pages/Stats";
import Leaderboard from "./pages/Leaderboard";

import Navbar from "./components/Navbar";
function App() {
  return (
    <BrowserRouter>

      <Navbar />
      
      <Routes>

        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/add-habit" element={<AddHabit />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/leaderboard" element={<Leaderboard />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
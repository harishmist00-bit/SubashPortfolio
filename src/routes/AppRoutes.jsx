import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import NewArrival from "../pages/NewArrival";
import RankTracker from "../pages/RankTracker";
import History from "../pages/History";
import Login from "../pages/Login";
import Register from "../pages/Register";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new-arrival" element={<NewArrival />} />
        <Route path="/rank-tracker" element={<RankTracker />} />
        <Route path="/history" element={<History />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
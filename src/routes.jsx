import { Route, Routes, useNavigate } from "react-router-dom";

import { Home } from "./pages/Home/Home.jsx";
import { Podcast } from "./pages/Podcast/Podcast.jsx";

export const AppRoutes = () => {
  const navigate = useNavigate();

  return (
    <>
      <Routes navigate={(to) => navigate(to)}>
        <Route path="/" element={<Home />} />
        <Route path="/podcast/:id" element={<Podcast />} />
      </Routes>
    </>
  );
};

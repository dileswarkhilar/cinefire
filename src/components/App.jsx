import React from "react";
import { CssBaseline } from "@mui/material";
import { Routes, Route } from "react-router-dom";

import {
  Actors,
  Movieinformation,
  Movies,
  NavBar,
  Profile,
} from "../components/Index";

const App = () => {
  return (
    <div>
      <CssBaseline />
      <NavBar />
      <main>
        <Routes>
          <Route path="/actors" element={<Actors />} />;
          <Route path="/movieinformation" element={<Movieinformation />} />;
          <Route exact path="/movies" element={<Movies />} />;
          <Route exact path="/navbar" element={<NavBar />} />;
          <Route exact path="/profile" element={<Profile />} />;
        </Routes>
      </main>
    </div>
  );
};

export default App;

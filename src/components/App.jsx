import React from "react";
import { CssBaseline } from "@mui/material";
import { Routes, Route } from "react-router-dom";

import useStyles from "./styles";

import {
  Actors,
  Movieinformation,
  Movies,
  NavBar,
  Profile,
} from "../components/Index";

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <NavBar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Routes>
          <Route exact path="/actors" element={<Actors />} />;
          <Route
            exact
            path="/movieinformation"
            element={<Movieinformation />}
          />
          ;
          <Route exact path="/movies" element={<Movies />} />;
          <Route exact path="/navbar" element={<NavBar />} />;
          <Route exact path="/profile" element={<Profile />} />;
        </Routes>
      </main>
    </div>
  );
};

export default App;

import React from "react";
import Navbar from "./components/navbar/Navbar";
import Body from "./pages/Body/Body";
import Grid from "@mui/material/Grid";

function App() {
  return (
    <>
      <Navbar />
      <Body />
      <Grid item xs={12}>
        <div style={{ height: "2rem" }}></div>
      </Grid>
    </>
  );
}

export default App;

import React from "react";
import Grid from "@mui/material/Grid";
import { styles } from "./styles";
import CustomSwitch from "../switch/CustomSwitch";
import Star from "./assets/Star.svg";
import Heart from "./assets/Heart.svg";
import Box from "@mui/material/Box";

const Buttons = () => {
  return (
    <>
      <Grid container xs={12}>
        <Grid item xs={4} style={styles.switch}>
          <CustomSwitch />
        </Grid>

        <Grid item xs={4}></Grid>
        <Grid item xs={1} style={styles.round}>
        <a href="/">
          <img src={Heart} alt="" style={styles.img} />
        </a>
        </Grid>
        <Grid item xs={1}></Grid>
        <Grid item xs={1} style={styles.round}>
        <a href="/">
          <img src={Star} alt="" style={styles.img} />
        </a>
        </Grid>
      </Grid>
    </>
  );
};

export default Buttons;

import React from 'react'
import Grid from "@mui/material/Grid";
import { styles } from "./styles";
import CustomSwitch from '../switch/CustomSwitch';
import Star from "./assets/Star.svg";
import Heart from "./assets/Heart.svg";

const Buttons = () => {
  return (
    <>
        <Grid container xs={12}>
            <Grid item xs={4} style={styles.switch}>
                <CustomSwitch/>
            </Grid>

            <Grid item xs={2}></Grid>
            <Grid item xs={2}></Grid>
        
            <Grid item xs={2} style={styles.heart}>
                <img src={Heart} alt="Heart" style={styles.img} />
            </Grid>
            <Grid item xs={2} style={styles.heart}>
                <img src={Star} alt="Heart" style={styles.img} />
            </Grid>
        </Grid>
    </>
  )
}

export default Buttons
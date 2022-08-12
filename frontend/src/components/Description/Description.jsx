import React from 'react'
import Grid from "@mui/material/Grid";

import { styles } from "./styles";
import "./styles.css";

import LineLeft from "./assets/LineLeft.svg";
import LineRight from "./assets/LineRight.svg";
import LineDown from "./assets/LineDown.svg";
import Descriptor from '../descriptor/Descriptor';

const Description = () => {
  return (
    <Grid
        container
        xs={12}
        style={styles.itemHeader}
        direction="column-reverse"
    >
       <Descriptor plusPos={styles.armorRight} lineSrc={LineRight} linePos={styles.lineRight} styles={"aRight"} />
       <Descriptor plusPos={styles.armorLeft} lineSrc={LineLeft} linePos={styles.lineLeft} styles={"aLeft"} />
       <Descriptor plusPos={styles.armorDown} lineSrc={LineDown} linePos={styles.lineDown} styles={'aDown'} />

        <Grid item style={styles.item}>
          <p className="price">
          $256<p className="taxes">plus taxes</p> 
          </p>
        </Grid>
    </Grid>
  )
}

export default Description
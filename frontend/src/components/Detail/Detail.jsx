import React from "react";
import Grid from "@mui/material/Grid";

import { styles } from "./styles";

const Detail = () => {
  return (
    <>
      <Grid container>
        <Grid item xs={1}></Grid>
        <Grid item xs={10} style={styles.detail}>
          <p style={styles.detailText}>Detail</p>
        </Grid>
        <Grid item xs={1}></Grid>
      </Grid>
      <Grid container>
        <Grid item xs={1}></Grid>
        <Grid item xs={10} style={styles.description}>
          <span style={styles.descriptionText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec aliquet
            faucibus tellus gravida nibh tempus elementum. Diam arcu diam
            viverra nibh suspendisse et. Amet nec vitae et ut dictum. Sapien
            suspendisse pulvinar in sed ante. Etiam nisi, ac tellus felis, justo
            sagittis purus sit.
          </span>
          <Grid item xs={1}></Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Detail;

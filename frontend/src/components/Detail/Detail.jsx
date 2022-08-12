import React from "react";
import Grid from "@mui/material/Grid";

import { styles } from "./styles";

const Detail = () => {
  return (
    <>
      <Grid item xs={12} style={styles.detail}>
        <span style={styles.detailText}>Detail</span>
      </Grid>
      <Grid item xs={12} style={styles.description}>
        <p style={styles.descriptionText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec aliquet
          faucibus tellus gravida nibh tempus elementum. Diam arcu diam viverra
          nibh suspendisse et. Amet nec vitae et ut dictum. Sapien suspendisse
          pulvinar in sed ante. Etiam nisi, ac tellus felis, justo sagittis
          purus sit.
        </p>
      </Grid>
    </>
  );
};

export default Detail;

import React from "react";

import Grid from "@mui/material/Grid";

import { styles } from "./styles";
import WhiteStar from "./assets/WhiteStar.svg";

const Review = () => {
  return (
    <>
      <Grid container>
        <Grid item xs={6} style={{ paddingLeft: 50 }}>
          <p style={styles.reviewTitle}>Reviews & Ratings</p>
        </Grid>
        <Grid item xs={6} style={styles.reviews}>
          <img src={WhiteStar} alt="star" />
          <img src={WhiteStar} alt="star" />
          <img src={WhiteStar} alt="star" />
          <img src={WhiteStar} alt="star" />
          <img src={WhiteStar} alt="star" />
        </Grid>
      </Grid>
    </>
  );
};

export default Review;

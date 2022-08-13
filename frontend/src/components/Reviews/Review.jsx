import React from "react";

import Grid from "@mui/material/Grid";

import { styles } from "./styles";
import WhiteStar from "./assets/WhiteStar.svg";

const Review = () => {
  return (
    <>
      <Grid container>
        <Grid item xs={1}></Grid>
        <Grid item xs={5} style={styles.review}>
          <p style={styles.reviewTitle}>Reviews & Ratings</p>
        </Grid>
        <Grid item xs={5} style={styles.reviewStars}>
          {Array(5)
            .fill(null)
            .map((_, index) => (
              <img
                key={index}
                src={WhiteStar}
                alt="star"
                style={styles.start}
              />
            ))}
        </Grid>
        <Grid item xs={1}></Grid>
      </Grid>
    </>
  );
};

export default Review;

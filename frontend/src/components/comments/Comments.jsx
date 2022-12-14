import React from "react";

import Grid from "@mui/material/Grid";

import { styles } from "./styles";
import User from "./assets/User.svg";

const Comments = () => {
  return (
    <>
      <Grid container>
        <Grid item xs={1}></Grid>
        <Grid container xs={10} style={styles.commentSection}>
          <Grid item xs={3}>
            <img src={User} alt="user" style={styles.userAvatarDim}></img>
          </Grid>
          <Grid item xs={9} justifyContent="center" alignItems="center">
            <p style={styles.commentTitle}>Samurai</p>
            <p style={styles.commentContent}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec
              aliquet faucibus .
            </p>
          </Grid>
        </Grid>
        <Grid item xs={1}></Grid>
      </Grid>
    </>
  );
};

export default Comments;

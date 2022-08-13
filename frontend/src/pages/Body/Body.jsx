import React from "react";

import Grid from "@mui/material/Grid";

import Description from "../../components/description/Description";
import Buttons from "../../components/buttons/Buttons";
import Detail from "../../components/detail/Detail";
import Review from "../../components/reviews/Review";
import Comments from "../../components/comments/Comments";

const Body = () => {
  return (
    <>
      <Grid container justifyContent="space-between" alignItems="stretch">
        <Grid item xs={12}>
          <Description />
        </Grid>
        <Grid item xs={12}>
          <Buttons />
        </Grid>
        <Grid item xs={12}>
          <Detail />
        </Grid>
        <Grid item xs={12}>
          <Review />
        </Grid>
        <Grid item xs={12}>
          <Comments />
        </Grid>
      </Grid>
    </>
  );
};

export default Body;

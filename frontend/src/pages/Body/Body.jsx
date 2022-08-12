import React from 'react'

import Grid from "@mui/material/Grid";

import Description from '../../components/description/Description'
import Buttons from '../../components/buttons/Buttons';
import Detail from '../../components/detail/Detail';
import Review from '../../components/reviews/Review';
import Comments from '../../components/comments/Comments';

const Body = () => {
  return (
    <>
        <Grid container className="content">
            <Description/>
            <Buttons/>
            <Detail />
            <Review/>
            <Comments/>
        </Grid>

    </>
  )
}

export default Body
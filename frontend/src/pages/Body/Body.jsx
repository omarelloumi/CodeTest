import React from 'react'
import Description from '../Description/Description'
import Grid from "@mui/material/Grid";
import Buttons from '../Buttons/Buttons';

const Body = () => {
  return (
    <>
        <Grid container className="content">
            <Description/>
            <Buttons/>
        </Grid>

    </>
  )
}

export default Body
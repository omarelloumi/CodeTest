import React from 'react'
import Description from '../Description/Description'
import Grid from "@mui/material/Grid";
import Buttons from '../Buttons/Buttons';
import Detail from '../Detail/Detail';

const Body = () => {
  return (
    <>
        <Grid container className="content">
            <Description/>
            <Buttons/>
            <Detail />
        </Grid>

    </>
  )
}

export default Body
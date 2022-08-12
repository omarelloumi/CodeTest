import React from 'react'

import Grid from "@mui/material/Grid";

import Description from '../../components/Description/Description'
import Buttons from '../../components/Buttons/Buttons';
import Detail from '../../components/Detail/Detail';

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
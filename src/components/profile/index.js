import React from 'react';
import { Grid, Avatar } from '@mui/material';
import Ellie from '../../images/example/Ellie.jpg'
import { WorkHistory } from './workHistory';

export const Profile = () => (
    <Grid container paddingBottom={20} paddingTop={10}>
        <Grid item xs={0} md={1}/>
        <Grid item container xs={12} md={3} alignItems='center' justifyContent="center">
            <Avatar sx={{ width: 200, height: 200 }} src={Ellie} />
        </Grid>
        <Grid item xs={12} md={7} paddingLeft={10} style={{backgroundColor: "white", borderRadius: "10px"}}>
            <h2>Shengqi Wang</h2>
            <p>Some Bio</p>
        </Grid>
        <Grid item xs={0} md={1}/>

        <Grid xs={1}/>
        <Grid item xs={10} paddingX={20} paddingY={5} container justifyContent="center" style={{
            backgroundColor: "white", 
            borderRadius: "10px",
            marginTop: "8%"
        }}>
            <WorkHistory />
        </Grid>
    </Grid>
)
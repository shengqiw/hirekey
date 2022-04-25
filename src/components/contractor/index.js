import React from 'react';
import { Grid, Stack, Box } from '@mui/material';
import backgroundImage from '../../images/wallpaper/bg-manager.jpg';
// import styles from '../../styles/global.module.css'


export const Contractor = () => {

    return (
        <Grid container alignItems="center" style={{
            backgroundColor: "white"}}>
            <Grid item xs={6}>
                <Box style={{
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    width: '100%',
                    height: '60vh'
                }}></Box>
            </Grid>
            <Grid item xs={6}>
                <Grid container justifyContent="center">
                    <Stack>
                        <h1>Create a Job Posting with HireKey</h1>
                        <p>We Provide a Secure Interface</p>
                        <p>Easy to Use</p>
                        <p>Find Local users</p>
                    </Stack>

                </Grid>
            </Grid>
            <Grid item xs={2}></Grid>
            <Grid item xs={8} textAlign='center' style={{
                backgroundColor: "white",
                height: '60vh'    
            }}>
            
            <Box marginTop={10}>
                IDK What to put here
            </Box>
            <Box>
            </Box>
            </Grid>
        </Grid>
    )
}
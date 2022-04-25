import React from 'react';
import { CardItem } from './cards';
import { Grid } from '@mui/material';
import testData from './testData.json';

export const JobsList = () => {

    //some data manipulation here

    return (
        <div style={{ padding: '20px 40px', width: "100%" }}>
            <h2 style={{ marginBottom: "40px" }}>Today's hot picks</h2>
            <Grid container spacing={4}>
                {
                    testData.listOfJobs.map((job, index) => (
                        <Grid item xs={12} md={6}>
                            <CardItem key={index} job={job} />
                        </Grid>
                    ))
                }
            </Grid>
        </div>

    )
}


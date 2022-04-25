import React from 'react';
import { CardItem } from './cards';
import { Stack } from '@mui/material';
import testData from './testData.json';

export const JobsList = () => {

    //some data manipulation here

    return (
        <div style={{ padding: '10px 40px' }}>
            <h2 style={{ marginBottom: "50" }}>Today's hot picks</h2>
            <Stack spacing={4}>
                {testData.listOfJobs.map(job => <CardItem job={job} />)}
            </Stack>
        </div>
    )
}


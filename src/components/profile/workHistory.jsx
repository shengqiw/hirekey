import React from 'react';
import { Grid } from '@mui/material';

export const WorkHistory = () => {
    const testData = [1, 2, 3, 4, 5];

    return (
        <Grid container justifyContent="center" alignItems="center">
            <Grid item xs={12}>
                <h2>Work History</h2>
            </Grid>
            {testData.map((workItem) => (
                <Grid item xs={12}>
                    Work History  #{workItem}
                </Grid>
            ))}
        </Grid>
    )
}
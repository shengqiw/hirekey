import React from 'react';
import { Grid } from '@mui/material';
import { JobsList } from './jobsList';
import styles from '../../styles/global.module.css';
import { JobsFilter } from './jobsFilter';


export const Listing = () => {

    return (
        <Grid container className={styles.listContainer}>
            <Grid item xs={4} md={3}
                className={styles.centerDiv}
                style={{
                    backgroundColor: "white",
                    borderTop: "2px solid #D6D6D6",
                }}
            >
                <JobsFilter />
            </Grid>
            <Grid container item xs={8} md={9}>
                <JobsList />
            </Grid>
        </Grid>
    )
}
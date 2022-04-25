import React from 'react';
import { Stack } from '@mui/material';
import styles from '../../styles/listing/listing.module.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export const JobsFilter = () => {
    return (
        <Stack spacing={2} className={styles.centerDiv} style={{ margin: "30px 40px" }}>
            <h2>HireKey Listing</h2>
            <TextField id="outlined-basic" label="Search Listing" variant="outlined" />
            <br />
            <Button variant="contained" size="large">All Jobs</Button>
            <Button variant="contained" size="large">Local Jobs</Button>
            <Button variant="contained" size="large">Long Term</Button>
        </Stack>
    )
}
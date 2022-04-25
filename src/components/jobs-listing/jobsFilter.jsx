import React from 'react';
import { Stack } from '@mui/material';
import styles from '../../styles/global.module.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export const JobsFilter = () => {
    return (
        <Stack position="fixed" spacing={2} className={styles.centerFilter}>
            <h2>HireKey Listing</h2>
            <TextField id="outlined-basic" label="Search Listing" variant="outlined" />
            <br />
            <Button variant="contained" size="large">All Jobs</Button>
            <Button variant="contained" size="large">Local Jobs</Button>
            <Button variant="contained" size="large">Long Term</Button>
        </Stack>
    )
}
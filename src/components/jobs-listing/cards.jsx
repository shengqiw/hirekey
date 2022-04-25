import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export const CardItem = ({job}) => {
  return (
    <Box sx={{ minWidth: 275 }} >
      <Card variant="outlined" style={{borderRadius: "10px"}}>
      <CardContent>
      <Typography variant="h5" component="div">
        {job.jobTitle || "Job Title"}
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        {job.employer || "Employer"}
      </Typography>
      <Typography variant="body2">
        {job.description || "Some description for this task"}
        <br />
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="medium">Learn More</Button>
    </CardActions>
      </Card>
    </Box>
  );
}

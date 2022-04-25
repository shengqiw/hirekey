import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import backgroundImage from '../../images/wallpaper/bg-main.jpg'

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const theme = createTheme({
    palette: {
        secondary: {
            main: '#C0C0C0'
        }
    }
});


export const Home = () => {
    const navigate = useNavigate();
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <main>
                <Box
                    sx={{
                        pt: '5vh',
                        pb: 8,
                        display: 'flex',
                        alignItems: 'flex-end'
                    }}
                    style={{
                        backgroundImage: `url(${backgroundImage})`,
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        height: '70vh'
                    }}
                >
                    <Container maxWidth="lg"
                        style={{
                            backgroundColor: 'rgba(251, 251, 251, .8)',
                            padding: 30,
                            border: '2px solid #FFA500',
                            borderRadius: '5px',
                            maxHeight: '100%',
                            maxWidth: '50vw',
                            minWidth: '340px',
                            marginBottom: '5%'
                        }}
                    >
                        <Typography
                            component="h3"
                            variant="h3"
                            align="center"
                            color="text.secondary"
                            gutterBottom
                        >
                            Contracting Reimagined
                        </Typography>
                        <Typography variant="h5" align="center" color="text.secondary" paragraph>
                            Some Slogan Here... You need contractors, we have them! You need work, we have them! Construction is cool :D
                        </Typography>
                        <Stack
                            sx={{ pt: 4 }}
                            direction="row"
                            spacing={2}
                            justifyContent="center"
                        >
                            <Button variant="contained"
                                onClick={() => navigate("/listing")}
                            >Job Listings</Button>
                            <Button variant="outlined">Info</Button>
                        </Stack>
                    </Container>
                </Box>
                <Container sx={{ py: 8 }} maxWidth="md">
                    {/* End hero unit */}
                    <Grid container spacing={4}>
                        {cards.map((card) => (
                            <Grid item key={card} xs={12} sm={8} md={6}>
                                <Card
                                    sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                                >
                                    <CardMedia
                                        component="img"
                                        sx={{
                                            // 16:9
                                            pt: '56.25%',
                                        }}
                                        image="https://source.unsplash.com/random"
                                        alt="random"
                                    />
                                    <CardContent sx={{ flexGrow: 1 }}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Heading
                                        </Typography>
                                        <Typography>
                                            This is a media card. You can use this section to describe the
                                            content.
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small">View</Button>
                                        <Button size="small">Edit</Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </main>
     
        </ThemeProvider>
    )
}
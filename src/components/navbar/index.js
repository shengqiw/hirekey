import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Logo1 from '../../images/logo/HireKey-logo-1.png'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { pageLinks, userLinks } from './links';

const theme = createTheme({
    palette: {
      primary: {
        main: "#fbe498"
      },
      secondary: {
          main: '#000',
      }
    }
  });

export const Navbar = () => {
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const navigate = useNavigate();

  return (
    <ThemeProvider theme={theme}>
        <AppBar position="sticky" sx={{bgColor: 'background.paper'}}>
        <Container maxWidth="xl">
            <Toolbar disableGutters>
                <img src={Logo1} alt="HireKey" height={60}/>
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                {pageLinks.map((pageLink) => (
                <Button
                    key={pageLink.title}
                    onClick={() => navigate(pageLink.redirect)}
                    sx={{ my: 2,display: 'block' }}
                >
                    <Typography color="secondary" style={{fontWeight: 600}}>
                    {pageLink.title}
                    </Typography>
                </Button>
                ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
                </Tooltip>
                <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
                >
                {userLinks.map((userLink) => (
                    <MenuItem key={userLink.title} onClick={() => navigate(userLink.redirect)}>
                    <Typography textAlign="center">{userLink.title}</Typography>
                    </MenuItem>
                ))}
                </Menu>
            </Box>
            </Toolbar>
        </Container>
        </AppBar>
    </ThemeProvider>

  );
};

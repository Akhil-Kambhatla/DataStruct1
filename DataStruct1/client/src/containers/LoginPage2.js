import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockPersonIcon from '@mui/icons-material/LockPersonOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';

function Copyright(props) {
  return (
    <Typography variant="body2" color="white" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Data Struct
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const blackTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#000000', // Black background
    },
    text: {
      primary: '#FFFFFF', // White text
    },
  },
});

export default function SignInSide() {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
    const navigate = useNavigate();

// Redirect to dashboard if already authenticated
React.useEffect(() => {
   if (isAuthenticated) {
      navigate('/dashboard'); // Redirect to the dashboard page
    }
  }, [isAuthenticated, navigate]);

  return (
    <ThemeProvider theme={blackTheme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockPersonIcon />
            </Avatar>
            <Typography component="h1" variant="h5" sx={{ p: 2 }}>
              Sign In
            </Typography>
            <Box
              component="div"
              sx={{
                my: 8,
                mx: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              
              <Button onClick={() => loginWithRedirect()}
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}>Login</Button>
            </Box>
            <Box component="div" sx={{ my: 8, mx: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Typography variant="body2" color="white" align="center">
                {'Don\'t have an account? '}
                <Link onClick={()=>loginWithRedirect({ 
                  authorizationParams:{
                    screen_hint: 'signup'
                  }
                 })}>
                 Sign Up
                </Link>
              </Typography>
            </Box>
            <Copyright sx={{ mt: 5 }} />
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

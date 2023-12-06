import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const Home = () => {
  return (
    <div style={{ padding: '20px', height: '100vh' ,marginTop:'100px'}}>
      <Grid container spacing={2}>
        {/* Left section with vector art */}
        <Grid item xs={12} md={6}>
          {/* You can replace the image source with your undraw vector art */}
          <img
            src="/home1.svg"
            alt="Vector Art"
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </Grid>

        {/* Right section with content */}
        <Grid item xs={12} md={6} sx={{ display: 'flex', alignItems: 'center' }}>
          <div>
            <Typography variant="h4" gutterBottom>
              Benefits of Learning DSA and Competitive Programming
            </Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </Typography>
            <Typography variant="body1">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Typography>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;

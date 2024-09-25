import React from 'react';
import { Grid, Typography } from '@mui/material';

const ImageMessageGrid = () => {
  return (
    <Grid container spacing={2} sx={{ height: '60vh' }}>
      {/* Left Half - Image */}
      <Grid item xs={12} md={6}>
        <img
          src="https://via.placeholder.com/200" // Replace with your image URL
          alt="Description"
          style={{ width: '50%', height: '50%', objectFit: 'cover',paddingLeft:'130px' }}
        />
      </Grid>

      {/* Right Half - Message */}
      <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center'}}>
        <Typography variant="h4" component="h4" align="center">
          Your message goes here. <br /> This is a brief description or information you want to share.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default ImageMessageGrid;

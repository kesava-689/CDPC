import React from 'react';
import { Grid, Card, CardContent, Typography, CardMedia } from '@mui/material';

const ContactUs = () => {
  return (
    <div style={{ padding: '20px' }}>
      {/* First Row with 2 Columns */}
      <Typography variant="h3" sx={{textAlign:'center'}}>Contact us</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Card variant="outlined">
            <Grid container>
              <Grid item xs={4}>
                <CardMedia
                  component="img"
                  image="https://via.placeholder.com/100" // Replace with your image URL
                  alt="Description"
                  sx={{ objectFit: 'cover', height: '100%' }}
                />
              </Grid>
              <Grid item xs={8}>
                <CardContent>
                  <Typography variant="h6">Contact Person 1</Typography>
                  <Typography variant="body2">Email: person1@example.com</Typography>
                  <Typography variant="body2">Phone: (123) 456-7890</Typography>
                </CardContent>
              </Grid>
            </Grid>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card variant="outlined">
            <Grid container>
              
            </Grid>
          </Card>
        </Grid>
      </Grid>

      {/* Second Row with 3 Columns */}
      <Grid container spacing={2} style={{ marginTop: '20px' }}>
        <Grid item xs={12} sm={4}>
          <Card variant="outlined">
            <Grid container>
              <Grid item xs={4}>
                <CardMedia
                  component="img"
                  image="https://via.placeholder.com/100" // Replace with your image URL
                  alt="Description"
                  sx={{ objectFit: 'cover', height: '100%' }}
                />
              </Grid>
              <Grid item xs={8}>
                <CardContent>
                  <Typography variant="h6">Contact Location</Typography>
                  <Typography variant="body2">Address: 123 Main St, City, Country</Typography>
                </CardContent>
              </Grid>
            </Grid>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card variant="outlined">
            <Grid container>
              <Grid item xs={4}>
                <CardMedia
                  component="img"
                  image="https://via.placeholder.com/100" // Replace with your image URL
                  alt="Description"
                  sx={{ objectFit: 'cover', height: '100%' }}
                />
              </Grid>
              <Grid item xs={8}>
                <CardContent>
                  <Typography variant="h6">Support</Typography>
                  <Typography variant="body2">Email: support@example.com</Typography>
                  <Typography variant="body2">Phone: (555) 123-4567</Typography>
                </CardContent>
              </Grid>
            </Grid>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card variant="outlined">
            <Grid container>
              <Grid item xs={4}>
                <CardMedia
                  component="img"
                  image="https://via.placeholder.com/100" // Replace with your image URL
                  alt="Description"
                  sx={{ objectFit: 'cover', height: '100%' }}
                />
              </Grid>
              <Grid item xs={8}>
                <CardContent>
                  <Typography variant="h6">General Inquiries</Typography>
                  <Typography variant="body2">Email: inquiries@example.com</Typography>
                  <Typography variant="body2">Phone: (444) 987-6543</Typography>
                </CardContent>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default ContactUs;

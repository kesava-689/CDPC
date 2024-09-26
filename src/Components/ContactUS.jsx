import React from 'react';
import { Grid, Card, CardContent, Typography, CardMedia } from '@mui/material';
import DirectorMessage from '../Components/DirectorMessage'
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
const ContactUs = () => {
  return (
    <div style={{ padding: '20px' }}>
      {/* First Row with 2 Columns */}
      <DirectorMessage />
      <Typography variant="h4" sx={{ textAlign: 'center',marginTop: {xs:'60px',md:'20px' } }}>Contact us</Typography><br/>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Card variant="outlined">
            <Grid container>
              <Grid item xs={4}>
                <CardMedia
                  component="img"
                  image="https://via.placeholder.com/100" // Replace with your image URL
                  alt="Description"
                  sx={{ objectFit: 'cover', height: '120px',width:'120px',margin:{md:'40px',xs:'10px'} }}
                />
              </Grid>
              <Grid item xs={8}>
                <CardContent>
                  <Typography variant="body1">Professor In charge</Typography><br/>
                  <Typography variant="h5">Prof. Sundar</Typography>
                  <Typography variant="body2">Department of computer science</Typography>
                  <Typography variant="body2" sx={{display:'flex'}}><EmailIcon sx={{height:'20px',width:'20px',marginRight:'10px'}}/>person1@example.com</Typography>
                  <Typography variant="body2" sx={{display:'flex'}}><CallIcon sx={{height:'20px',width:'20px',marginRight:'10px'}}/> (123) 456-7890</Typography>
                  
                </CardContent>
              </Grid>
            </Grid>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card variant="outlined">
            <Grid container sx={{padding:'20px'}}>
                <CardContent>
                  <Typography variant="h5">CDPC office</Typography><br/>
                  <Typography variant="body2">MME block,RGUKT rk valley</Typography>
                  <Typography variant="body2" sx={{display:'flex'}}><EmailIcon sx={{height:'20px',width:'20px',marginRight:'10px'}}/>person1@example.com</Typography>
                  <Typography variant="body2" sx={{display:'flex'}}><CallIcon sx={{height:'20px',width:'20px',marginRight:'10px'}}/> (123) 456-7890</Typography>
                  
                </CardContent>
            </Grid>
          </Card>
        </Grid>
      </Grid>

      {/* Second Row with 3 Columns */}
      <Grid
        container
        spacing={2}
        sx={{
          marginTop: { xs: '20px', sm: '30px' }, // Apply 20px margin on small screens
        }}
      >
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
                <Typography variant="h5">Name</Typography>
                  <Typography variant="body2" sx={{display:'flex'}}><EmailIcon sx={{height:'20px',width:'20px',marginRight:'10px'}}/>person1@example.com</Typography>
                  <Typography variant="body2" sx={{display:'flex'}}><CallIcon sx={{height:'20px',width:'20px',marginRight:'10px'}}/> (123) 456-7890</Typography>
                  
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
                <Typography variant="h5">Name</Typography>
                  <Typography variant="body2" sx={{display:'flex'}}><EmailIcon sx={{height:'20px',width:'20px',marginRight:'10px'}}/>person1@example.com</Typography>
                  <Typography variant="body2" sx={{display:'flex'}}><CallIcon sx={{height:'20px',width:'20px',marginRight:'10px'}}/> (123) 456-7890</Typography>
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
                <Typography variant="h5">Name</Typography>
                  <Typography variant="body2" sx={{display:'flex'}}><EmailIcon sx={{height:'20px',width:'20px',marginRight:'10px'}}/>person1@example.com</Typography>
                  <Typography variant="body2" sx={{display:'flex'}}><CallIcon sx={{height:'20px',width:'20px',marginRight:'10px'}}/> (123) 456-7890</Typography>
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

import {React,useState} from 'react';
import { Grid, Typography,Dialog, DialogTitle, DialogContent, DialogActions, Button  } from '@mui/material';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
const ImageMessageGrid = () => {
  const [open, setOpen] = useState(false);

  // Function to handle opening the dialog
  const handleClickOpen = () => {
    setOpen(true);
  };

  // Function to handle closing the dialog
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Grid container spacing={2} sx={{ height: '60vh' }}>
      {/* Left Half - Image */}
      <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center'}}>
        <img
          src="https://via.placeholder.com/200" // Replace with your image URL
          alt="Description"
          style={{ width: '50%', height: '100%', objectFit: 'cover' }}
        />
      </Grid>

      {/* Right Half - Message */}
      <Grid item xs={12} md={6} sx={{ display: 'flex',flexDirection:'column'}}>
        <Typography variant="body1" sx={{ cursor: 'pointer', color: 'blue' }}>DIRECTOR'S MESSAGE</Typography><br/>
        <Typography variant='h5'>"At RGUKT RK Valley, we believe education is not just about knowledge, but about empowering minds to innovate, lead, and transform the world."</Typography><br/>
        <Typography variant='body1' sx={{ cursor: 'pointer', color: 'blue',display:'flex' }} onClick={handleClickOpen}>
        Read more<KeyboardDoubleArrowRightIcon/>
      </Typography><br />
      <Typography variant='body1'>Dr. A V S S Kumara Swami Gupta</Typography>

      {/* Dialog for additional information */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Director's Message - Extended</DialogTitle>
        <DialogContent>
          <Typography variant="body2">
            At RGUKT RK Valley, we are dedicated to providing our students with an education that transcends traditional boundaries. Our focus is on holistic development, combining academic excellence with real-world applications. We encourage our students to engage in research, participate in industry interactions, and take part in various extracurricular activities. Together, we aim to equip them with the skills and confidence to become leaders in their fields and make meaningful contributions to society.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
      </Grid>
    </Grid>
  );
};

export default ImageMessageGrid;

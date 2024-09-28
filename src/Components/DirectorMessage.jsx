import React, { useState } from "react";
import { Grid, Typography, Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

const DirectorsMessage = () => {
  // State to manage the open state of the dialog
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
    <div className="directors-message">
      <div className="message-content">
        <img 
          src="https://via.placeholder.com/150"
          alt="Director"
          className="director-image"
        />
        <div className="message-text">
          <h3>DIRECTOR'S MESSAGE</h3>
          <p>
            "At RGUKT RK Valley, we believe education is not just about knowledge, 
            but about empowering minds to innovate, lead, and transform the world."
          </p>
          {/* Link to open the dialog */}
          <a href="#" className="read-more" onClick={handleClickOpen}>
            Read more &gt;&gt;
          </a>
          <div className="director-info">
            <p><strong>Name:</strong> Dr. A V S S Kumara Swami Gupta <small>PhD</small></p>
            <p><strong>Profession:</strong> Director, RGUKT Tiruchanoor</p>
            
            {/* Dialog box for extended message */}
            <Dialog open={open} onClose={handleClose}>
              <DialogTitle>Director's Message - Extended</DialogTitle>
              <DialogContent>
                <Typography variant="body2">
                  At RGUKT RK Valley, we are dedicated to providing our students with an education 
                  that transcends traditional boundaries. Our focus is on holistic development, 
                  combining academic excellence with real-world applications. We encourage our students 
                  to engage in research, participate in industry interactions, and take part in various 
                  extracurricular activities. Together, we aim to equip them with the skills and confidence 
                  to become leaders in their fields and make meaningful contributions to society.
                </Typography>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose} color="primary">
                  Close
                </Button>
              </DialogActions>
            </Dialog>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DirectorsMessage;

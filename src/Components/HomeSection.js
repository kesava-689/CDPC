import { React, useState, useEffect, useRef } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';
import AllInclusiveOutlinedIcon from '@mui/icons-material/AllInclusiveOutlined';

function HomeSection() {
  const [open, setOpen] = useState(false);
  const [dialogType, setDialogType] = useState(null);
  const [activeIndex, setActiveIndex] = useState(-1);
  const itemsRef = useRef([]);

  const handleClickOpen = (type) => {
    setDialogType(type);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setDialogType(null);
  };

  const timelineItems = [
    {
      icon: <ShareOutlinedIcon sx={{ color: 'white' }} />,
      title: 'Alumni',
      description: 'Our alumni have achieved success and excelled in diverse professions worldwide...',
      dialogType: 1,
    },
    {
      icon: <StarBorderOutlinedIcon sx={{ color: 'white' }} />,
      title: 'Rankings',
      description: 'Recognized for excellence, RGUKT RK Valley is a leading institute in technical education...',
      dialogType: 2,
    },
    {
      icon: <WorkspacePremiumOutlinedIcon sx={{ color: 'white' }} />,
      title: 'Admission Process',
      description: 'RGUKT RK Valley selects talented students through a rigorous process...',
      dialogType: 3,
    },
    {
      icon: <AllInclusiveOutlinedIcon sx={{ color: 'white' }} />,
      title: 'All Round Development',
      description: 'Skills, aptitude, and perception shape personal and professional identity...',
      dialogType: 4,
    },
  ];

  useEffect(() => {
    const observerOptions = {
      root: null,
      threshold: 0.3, // Adjust the threshold as necessary
    };

    const observerCallback = (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setActiveIndex(index); // Set the active index when it comes into view
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    itemsRef.current.forEach((item) => {
      if (item) {
        observer.observe(item);
      }
    });

    return () => {
      if (itemsRef.current) {
        itemsRef.current.forEach((item) => {
          if (item) observer.unobserve(item);
        });
      }
    };
  }, []);

  return (
    <Container maxWidth="lg" sx={{ padding: { xs: '15px', lg: '60px' }, color: 'white' }}>
      <Container sx={{ backgroundColor: 'blue' }}>
        <Typography variant="h5" sx={{ textAlign: 'center', fontWeight: '500', marginBottom: '20px', color: '#000' }}>
          Why IIIT RK Valley
        </Typography>
        <Typography variant="body1" sx={{ textAlign: 'center', marginBottom: '40px', fontSize: { xs: '12px', lg: '14px' }, color: '#000' }}>
          Rajiv Gandhi University of Knowledge Technologies (RGUKT), RK Valley, was established in 2008 with the goal of providing high-quality education to the rural youth of Andhra Pradesh, India...
        </Typography>
      </Container>

      <Timeline position="alternate" sx={{ color: 'white' }}>
        {timelineItems.map((item, index) => (
          <TimelineItem key={index} ref={(el) => (itemsRef.current[index] = el)}>
            <TimelineSeparator>
              <TimelineDot
                sx={{
                  backgroundColor: activeIndex === index ? '#00bcd4' : 'rgb(9, 44, 95)',
                  transition: 'background-color 0.5s ease',
                }}
              >
                {item.icon}
              </TimelineDot>
              {index < timelineItems.length - 1 && (
                <TimelineConnector
                  sx={{
                    backgroundColor: activeIndex >= index ? '#00bcd4' : '#000',
                    transition: 'background-color 0.5s ease',
                  }}
                />
              )}
            </TimelineSeparator>
            <TimelineContent sx={{ paddingBottom: '30px', backgroundColor: 'rgb(9, 44, 95)' }}>
              <Typography variant="h6" sx={{ fontWeight: '600', color: '#000' }}>
                {item.title}
              </Typography>
              <Typography variant="body1" sx={{ fontSize: { xs: '12px', lg: '14px' }, color: '#000' }}>
                {item.description}
              </Typography>
              <Button
                variant="contained"
                onClick={() => handleClickOpen(item.dialogType)}
                sx={{
                  backgroundColor: 'rgb(9, 44, 95)',
                  color: 'white',
                  fontSize: '10px',
                  padding: '3px 6px',
                  marginTop: '16px',
                  '&:hover': {
                    backgroundColor: '#073061',
                  },
                }}
              >
                Know more
              </Button>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>

      {/* Dialog Box */}
      <Dialog open={open} onClose={handleClose} aria-labelledby="dialog-title" aria-describedby="dialog-description">
        <DialogTitle id="dialog-title">
          {dialogType === 1 && 'Alumni'}
          {dialogType === 2 && 'Rankings'}
          {dialogType === 3 && 'Admission Process'}
          {dialogType === 4 && 'All Round Development'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="dialog-description">
            {dialogType === 1 && <p>Our alumni have achieved remarkable success across a wide range of professions...</p>}
            {dialogType === 2 && <p>RGUKT RK Valley, known for its unique integrated B.Tech program, is dedicated to nurturing future leaders...</p>}
            {dialogType === 3 && <p>All students admitted to RGUKT RK Valley are chosen through a meticulous selection process...</p>}
            {dialogType === 4 && <p>Recognizing that skills, aptitude, and perception are critical components of an individual's growth...</p>}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">Close</Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}

export default HomeSection;

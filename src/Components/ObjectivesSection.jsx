import React from 'react';
import { Box, Card, CardContent, Typography, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion'; // Import Framer Motion
import { useAnimation, useInView } from 'framer-motion';
import VerticalCarousel from './VerticalSlider';
import SemiCircularProgressBar from './Test'; // Import the ProgressBar component

const objectives = [
  "To maintain an ecosystem where collaboration with industry thrives by continuous and very productive relationships with corporations of all sizes, from Start-Ups to Multi-National Corporations from different sectors of Industry.",
  "To expose the students towards different Career Options available after graduation and helping them in identifying their Career Objectives.",
  "To provide an efficient environment for the students in enhancing their skills and their preparation strategies towards fulfilling their Career Objectives.",
  "Enabling the students to meet the industry expectation based on the expected objectives by organizing various programmes to improve soft skills, professional communication, and personality.",
  "To provide employment opportunities for the students by approaching the organizations for the Campus Placements at the Institute.",
  "To assist the departments in organizing Industry Oriented Workshops, Leadership Talks, Lectures, Curriculum Oriented Career Prospects.",
  "Aiming to place the maximum number of students through campus & off-campus interviews conducted by the top companies."
];

const ObjectivesSection = () => {
  return (
    <Grid container direction={{ xs: 'column', sm: 'row' }}>
      {/* Left Column - Vertical Carousel */}
      <Grid
        item
        xs={0} // Hidden on xs screens
        sm={3} // Takes 25% on small and larger screens
        sx={{
          display: { xs: 'none', sm: 'block' }, // Hide on xs screens
          paddingTop: '20px',
        }}
      >
        <Typography variant='h5' sx={{paddingLeft:'30px',fontWeight:700}}>Current Placements</Typography>
        <VerticalCarousel />

        {/* SemiCircularProgressBar below the Vertical Carousel, hidden on small screens */}
        <Box
          sx={{
            display: { xs: 'none', md: 'block' }, // Hidden on xs and sm screens, visible on md+
            marginTop: '20px',
            marginLeft:'40px' // Spacing between the carousel and progress bar
          }}
        >
          <SemiCircularProgressBar value={75} maxValue={100} /> {/* Example values */}
        </Box>
        <Box
          sx={{
            display: { xs: 'none', md: 'block' }, // Hidden on xs and sm screens, visible on md+
            marginTop: '20px',
            marginLeft:'30px' ,
            height:'200px',
            width:'250px',
            backgroundColor:'#f0f0f0'
            // Spacing between the carousel and progress bar
          }}
        >
         {/* Example values */}
        </Box>
      </Grid>

      {/* Right Column - Objectives Section */}
      <Grid item xs={12} sm={9}>
        <Box
          sx={{
            width: '100%', // Full width for the content
            marginRight: { md: '0px' },
            paddingTop: '10px',
            paddingLeft: { md: '0px' },
            marginLeft: { md: '0px' },
            padding: { xs: '5px' },
          }}
        >
          <Grid container spacing={1}>
            {/* Header for "CDPC Objectives" */}
            <Grid item xs={12}>
              <Paper elevation={3}>
                <Card
                  sx={{
                    backgroundColor: 'rgb(9, 44, 95)',
                    color: 'white',
                    padding: 0.5,
                    height: 40, // Explicit height to reduce card size
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <CardContent>
                    <Typography variant="h5" component="h5" align="center">
                      CDPC Objectives
                    </Typography>
                  </CardContent>
                </Card>
              </Paper>
            </Grid>

            {/* List of objectives with Framer Motion animation */}
            {objectives.map((objective, index) => (
              <Grid item xs={12} key={index}>
                <InViewAnimation>
                  <Paper elevation={3}>
                    <Card sx={{ padding: '0px' }}>
                      <CardContent sx={{ paddingX: '5px', paddingY: '0px' }}>
                        <Typography
                          variant="body1"
                          component="p"
                          sx={{ fontSize: '1rem', lineHeight: '1.3' }}
                        >
                          {objective}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Paper>
                </InViewAnimation>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};

/**
 * InViewAnimation Component
 * This component wraps each card and triggers the animation when the card comes into view.
 */

const InViewAnimation = ({ children }) => {
  const controls = useAnimation(); // Controls the animation
  const ref = React.useRef(); // Ref for the component to detect in-view

  // Hook to check if the component is in view
  const isInView = useInView(ref, { once: false }); // Animate on every view

  // Trigger animation when the element comes into view
  React.useEffect(() => {
    if (isInView) {
      controls.start({
        x: 0, // Move card to its original position
        opacity: 1,
        transition: {
          type: 'spring',
          stiffness: 50,
          damping: 15,
          delay: 0.5, // 0.5-second delay
        },
      });
    }
  }, [controls, isInView]);

  return (
    <motion.div
      ref={ref}
      initial={{ x: '100%', opacity: 0 }} // Start off-screen to the right
      animate={controls} // Animate when in view
    >
      {children}
    </motion.div>
  );
};

export default ObjectivesSection;

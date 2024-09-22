import React from 'react';
import { Box, Card, CardContent, Typography, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion'; // Import Framer Motion
import { useAnimation, useInView } from 'framer-motion';

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
    <Box
  sx={{
    width: { xs: '100%', sm: '100%', lg: '75%' },
    marginRight: '0px',
    padding: '10px',
    marginLeft: { xs: '0px', md: '280px' }, // Space for another component
  }}
>
  <Grid container spacing={1}> {/* Reduced spacing between cards */}
    {/* Header for "CDPC Objectives" */}
    <Grid item xs={12}>
      <Paper elevation={3}>
        <Card sx={{ backgroundColor: 'rgb(9, 44, 95)', color: 'white', padding: '5px' }}>
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
        <InViewAnimation> {/* Animation wrapper for each card */}
          <Paper elevation={3}>
            <Card sx={{ padding: '0px' }}> {/* Adjusted card padding */}
              <CardContent sx={{ padding: '5px' }}> {/* Adjusted content padding */}
                <Typography variant="body1" component="p" sx={{ fontSize: '1rem', lineHeight: '1.3' }}>
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
  const isInView = useInView(ref, { once: true }); // Animate only once when in view

  // Trigger animation when the element comes into view
  React.useEffect(() => {
    if (isInView) {
      controls.start({
        x: 0, // Move card to its original position
        opacity: 1,
        transition: { type: 'spring', stiffness: 50, damping: 15 },
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

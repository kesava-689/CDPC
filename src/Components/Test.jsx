import React from 'react';
import { motion } from 'framer-motion';
import { Box, Typography } from '@mui/material';
import CountUp from 'react-countup'; // Import CountUp
import { useInView } from 'react-intersection-observer'; // Import useInView

const SemiCircularProgressBar = ({ value, maxValue }) => {
  const radius = 90; // Radius of the semicircle
  const strokeWidth = 10; // Width of the progress bar
  const circumference = Math.PI * radius; // Circumference of the semicircle
  const offset = circumference - (value / maxValue) * circumference; // Calculate the offset for the progress

  const { ref, inView } = useInView({ triggerOnce: true }); // Detect when the component is in view

  return (
    <Box
      ref={ref} // Attach ref to detect when this Box is in view
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        height: 150,
        width: 200,
      }}
    >
      {/* SVG semicircular progress bar */}
      <svg height="150" width="200">
        {/* Background arc */}
        <path
          d={`M 10,${radius + 10} A ${radius},${radius} 0 1 1 ${radius * 2 + 10},${radius + 10}`}
          stroke="#e6e6e6"
          strokeWidth={strokeWidth}
          fill="transparent"
        />

        {/* Foreground arc (progress) */}
        <motion.path
          d={`M 10,${radius + 10} A ${radius},${radius} 0 1 1 ${radius * 2 + 10},${radius + 10}`}
          stroke="green" //#ffcc00
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={circumference} // Initial value
          animate={inView ? { strokeDashoffset: offset } : {}} // Only animate when in view
          initial={{ strokeDashoffset: circumference }} // Start at full circumference (no progress)
          transition={{ duration: 4, ease: "easeOut" }} // Animation for progress
        />
      </svg>

      {/* Animated CountUp for the number of students placed */}
      <Typography
        variant="h6"
        component="span"
        sx={{
          position: 'absolute',
          top: '50%',
          transform: 'translateY(-50%)',
        }}
      >
        {inView && (
          <CountUp
            start={0} // Starting count
            end={value} // Final count value
            duration={4} // Duration of the count animation
          />
        )}
      </Typography>
    </Box>
  );
};

// Usage of the component
// const App = () => {
//   const totalStudentsPlaced = 75; // Example value
//   const maxStudents = 100;

//   return (
//     <div>
//       <SemiCircularProgressBar value={totalStudentsPlaced} maxValue={maxStudents} />
//     </div>
//   );
// };

export default SemiCircularProgressBar;

import React from 'react';
import LandingPageImgContainer from '../LandingPageImgContainer';
import {Box} from '@mui/material';
import ObjectivesSection from '../ObjectivesSection';
const Home = () => {
  return (
    <div>
      <Box sx={{ paddingTop: '64px' }}> {/* Adjust based on your navbar height */}
        <LandingPageImgContainer />
        <ObjectivesSection/>
        {/* Other components or content */}
      </Box>
    </div>
  );
};

export default Home;

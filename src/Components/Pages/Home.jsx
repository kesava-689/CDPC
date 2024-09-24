import React from 'react';
import LandingPageImgContainer from '../LandingPageImgContainer';
import {Box} from '@mui/material';
import ObjectivesSection from '../ObjectivesSection';
import MyTimeline from '../TimeLine';
import HomeSection from '../HomeSection';
const Home = () => {
  return (
    <div>
      <Box sx={{ paddingTop: '50px' }}> {/* Adjust based on your navbar height */}
        <LandingPageImgContainer />
        <ObjectivesSection/>
        {/* <MyTimeline/> */}
        <HomeSection/>
        {/* Other components or content */}
      </Box>
    </div>
  );
};

export default Home;

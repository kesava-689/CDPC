import React from 'react';
import LandingPageImgContainer from '../LandingPageImgContainer';
import {Box} from '@mui/material';
import ObjectivesSection from '../ObjectivesSection';
// import MyTimeline from '../TiLine';
import HomeSection from '../HomeSection';
// import DirectorMessage from '../DirectorMessage';
import Test from  '../Test'
import ContactUs from '../ContactUS';
import Manager from '../Manager';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import DirectorsMessage from '../DirectorMessage';
const Home = () => {
  return (
    <div>
      <Box sx={{ paddingTop: '50px' }}> {/* Adjust based on your navbar height */}
        <LandingPageImgContainer />
        <ObjectivesSection/>
        {/* <MyTimeline/> */}
        <HomeSection/>
        <DirectorsMessage />
        <ContactUs/>
        <Manager/>
        {/* Other components or content */}
      </Box>
    </div>
  );
};

export default Home;

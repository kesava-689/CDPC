import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import JobInterview from './JobInterview';
import EventsWorkshops from './EventsWorkshops';
import PlacementPreparation from './PlacementPreparation';
import PlacementAnalytics from './PlacementAnalytics';
import Alumni from './Alumni';
import Dashboard from './Dashboard';
import Login from './Login';
// import myImage from "file:///home/rguktrkvalley/Downloads/campus.jpeg";
import './Home.css';
import HomeSection from './HomeSection';

const HomeContent = () => {
  const location = useLocation();

  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal');

    const handleScroll = () => {
      revealElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight - 150) {
          element.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (location.pathname === "/") {
    return (
      <div>
        {/* Your existing structure */}
        <div className="image-container" style={{ position: 'relative', width: '100%' }}>
          <div className="bordered-div">
            <p>
            The Career Development and Placement Cell (CDPC) at RGUKT, R.K. Valley equips students with the skills and training needed to become competent professionals. Through a constantly updated curriculum and expert faculty, CDPC bridges the gap between industry and academia. The cell focuses on holistic development, offering training in communication, leadership, and problem-solving skills. CDPC also conducts seminars on personality development and interpersonal skills to enhance student employability. Its mission is to prepare students for successful campus placements.              {/* ... */}
            </p>
          </div>

          <img src='/img1.jpg' style={{ width: '100%', height: '100%', filter: 'blur(4px)' }} />
        </div>
        
        <div style={{ display: 'flex', justifyContent: 'center', background: 'rgb(9, 44, 95)', padding: '10px' }}>
          <h1 style={{ margin: '0', color: 'white' }}>Objectives of CDPC</h1>
        </div>

        <div className="bottom-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div className="left-side" style={{ width: '20%', padding: '10px', background: 'yellow', height: '100%' }}></div>
          <div className="right-side" style={{ width: '80%', padding: '10px', display: 'flex', gap: '10px', flexWrap: 'wrap', alignContent: 'center' }}>
            <div className="reveal box">
            To maintain an ecosystem where collaboration with industry thrives by continuous and very productive relationships with corporations of all sizes, from Start-Ups to Multi-National Corporations from different sectors of Industry.             </div>
            <div className="reveal box">
            To expose the students towards different Career Options available after graduation and helping them in identifying their Career Objectives.             </div>
            <div className="reveal box">
            To provide an efficient environment for the students in enhancing their skills and their preparation strategies towards fulfilling their Career Objectives.            </div>
            <div className="reveal box">
            Enabling the students to meet the industry expectation based on the expected objectives by organizing various programmes to improve soft skills, professional communication, and personality.             </div>
            <div className="reveal box">
            To provide employment opportunities for the students by approaching the organizations for the Campus Placements at the Institute             </div>
            <div className="reveal box">
            To assist the departments in organizing Industry Oriented Workshops, Leadership Talks, Lectures, Curriculum Oriented Career Prospects.             </div>
            <div className="reveal box">
            Aiming to place the maximum number of students through campus & off-campus interviews conducted by the top companies.            </div>
          </div>
        </div>
        <br/>
        <br/>
        <HomeSection/>
      </div>
    );
  }

  return null;
};

const Home = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="home-content">
          <HomeContent />
          <Routes>
            <Route path="/" />
            <Route path="/job-interview" element={<JobInterview />} />
            <Route path="/events-workshops" element={<EventsWorkshops />} />
            <Route path="/placement-preparation" element={<PlacementPreparation />} />
            <Route path="/placement-analytics" element={<PlacementAnalytics />} />
            <Route path="/alumni" element={<Alumni />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default Home;

// src/components/Home.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
// Import the components/pages for the routes
import JobInterview from './JobInterview';
import EventsWorkshops from './EventsWorkshops';
import PlacementPreparation from './PlacementPreparation';
import PlacementAnalytics from './PlacementAnalytics';
import Alumni from './Alumni';
import Dashboard from './Dashboard';
import Login from './Login';
import myImage from "file:///home/rguktrkvalley/Downloads/campus.jpeg";
import './Home.css';

// Component for displaying the carousel and other content only on the home page
const HomeContent = () => {
  const location = useLocation();

  // Render the carousel only when on the home page ("/")
  if (location.pathname === "/") {
    return (
      <div>
        <div className="image-container" style={{ position: 'relative', width: '100%'}}>
          <div className="bordered-div">
            <p>
              Career Development and Placement Cell (CDPC) at RGUKT, R.K.Valley is dedicated to enriching the students of the institute as competent and efficient human resources for the nation. Our students are guided and trained through a constantly updated curriculum, by a highly qualified and dedicated faculty, meeting the fast-changing needs of the industry. The CDPC at RGUKT R.K.Valley regularly understands the needs of the industry and acts as a bridge between the industry and academia.
              The career development and placement cell (CDC) is a platform to provide training / learning opportunities for the students to bring their holistic development and also to prepare them for the campus placement.
              The CDPC provides worthy services in helping the students with soft skills viz. communication skills, problem solving skills, leadership skills and other personality development skills which enable them to develop skills required to cater the needs of competitive world. The CDPC also organizes programmes such as Seminars on Personality Development, Interpersonal relationship, and Communication Skills etc for improving the latent skills of the student.
            </p>
          </div>

          <img
            src={myImage}
            style={{ width: '100%', height: '100%', filter: 'blur(4px)'}}
          />
        </div>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          background: 'rgb(9, 44, 95)',
          padding: '10px',
        }}>
          <h1 style={{
            margin: '0', // Remove default margin
            color: 'white', // Optional: set text color for better contrast
          }}>
            Objectives of CDPC
          </h1>
        </div>
        <div className="bottom-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div className="left-side" style={{ width: '20%', padding: '10px',background:'yellow',height:'100%' }}>
            <p style={{ margin: 0, fontWeight: 'bold', alignItems: 'center' }}></p>
          </div>
          <div className="right-side" style={{ width: '80%', padding: '10px', display: 'flex', gap: '10px', flexWrap: 'wrap', alignContent: 'center' }}>
            <div className="reveal box">

              To maintain an ecosystem where collaboration with industry thrives by continuous and very productive relationships with corporations of all sizes, from Start-Ups to Multi-National Corporations from different sectors of Industry.

            </div>
            <div className="reveal box">

              To expose the students towards different Career Options available after graduation and helping them in identifying their Career Objectives.

            </div>
            <div className="reveal box">

              To provide an efficient environment for the students in enhancing their skills and their preparation strategies towards fulfilling their Career Objectives.

            </div>
            <div className="reveal box" >

              Enabling the students to meet the industry expectation based on the expected objectives by organizing various programmes to improve soft skills, professional communication, and personality.

            </div>
            <div className="reveal box">

              To provide employment opportunities for the students by approaching the organizations for the Campus Placements at the Institute

            </div>
            <div className="reveal box">

            To assist the departments in organizing Industry Oriented Workshops, Leadership Talks, Lectures, Curriculum Oriented Career Prospects

            </div>
            <div className="reveal box">

            Aiming to place the maximum number of students through campus & off-campus interviews conducted by the top companies.
            </div>

          </div>
        </div>
      </div>
    );
  }

  return null; // Don't render anything if not on the home page
};

const Home = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="home-content">
          {/* Conditionally render the carousel based on the route */}
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

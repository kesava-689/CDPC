import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { motion } from 'framer-motion';
import ShareIcon from '@mui/icons-material/Share';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import { Container,Typography } from '@mui/material';
import './Styles/homeSection.css'
function TimelineWithAnimation() {
  return (
    <Container>
      <br/>
      <Container maxWidth="lg" sx={{ padding: '10px',textAlign:'center' }}>
        <Typography variant="h4" gutterBottom>
          Why IIIT RK Valley
        </Typography>
        <Typography variant="body1" paragraph >
        Rajiv Gandhi University of Knowledge Technologies (RGUKT), RK Valley, was established in 2008 to offer quality education to rural youth in Andhra Pradesh. The university is renowned for its unique six-year integrated B.Tech program, which combines secondary and engineering education. RGUKT focuses on research, innovation, and the holistic development of students in the fields of engineering, technology, and sciences, aiming to shape them into skilled professionals and leaders. Education at RGUKT heavily relies on Information Technology, providing each student with a laptop for a tech-enhanced learning experience. The curriculum incorporates modern teaching methods such as Learning by Doing, Learning by Example, and Problem-based Learning. Online lectures are supplemented with problem-solving sessions to reinforce concepts, fostering an interactive and practical approach to education.

        </Typography>
      </Container>
      <Container sx={{ width: '100%' }}>
          <VerticalTimeline >
          {/* First element */}
          <VerticalTimelineElement
            className="vertical-timeline-element--alumni"
            contentStyle={{ backgroundColor: '#73A5c6', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(9, 44, 95)' }}
            iconStyle={{ background: 'rgb(9, 44, 95)', color: '#fff' }}
            icon={<ShareIcon />}
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
            <Typography variant="h4" gutterBottom>
              Alumni
            </Typography>
            <Typography variant="body1" paragraph>
            Our alumni, successful across various fields worldwide, contribute to the institution's growth by inspiring current students and fostering collaboration. Through events and meetings, they stay connected, support development, and strengthen the college's legacy.
            </Typography>
            </motion.div>
          </VerticalTimelineElement>

          {/* Second element */}
          <VerticalTimelineElement
          className="vertical-timeline-element--rankings"
          contentStyle={{ backgroundColor: '#42b79d', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(9, 44, 95)' }}
          iconStyle={{ background: 'rgb(9, 44, 95)', color: '#fff' }}
            icon={<StarOutlineIcon />}
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
            <Typography variant="h4" gutterBottom>
              Rankings
            </Typography>
            <Typography variant="body1" paragraph>
            RGUKT RK Valley is recognized for its unique six-year integrated B.Tech program focused on rural youth, with a strong emphasis on academic excellence, innovation, and research. The university has made significant progress in student development and placements, earning a B+ grade from NAAC, reflecting its commitment to quality education and continuous improvement.
            </Typography>
            </motion.div>
          </VerticalTimelineElement>

          {/* Third element */}
          <VerticalTimelineElement
            className="vertical-timeline-element--admission"
            contentStyle={{ backgroundColor: '#219ebc', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(9, 44, 95)' }}
            iconStyle={{ background: 'rgb(9, 44, 95)', color: '#fff' }}
            icon={<WorkspacePremiumIcon />}
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Typography variant="h4" gutterBottom>
              Admission Process
            </Typography>
            <Typography variant="body1" paragraph>
            RGUKT RK Valley admits students primarily based on their Class 10 grades, ensuring that high-performing candidates, especially from rural areas, are selected for its integrated engineering program. This merit-based process helps nurture exceptional talent in the fields of engineering and technology.
            </Typography>
            </motion.div>
          </VerticalTimelineElement>

          {/* Education element */}
          <VerticalTimelineElement
            className="vertical-timeline-element--alumni"
            contentStyle={{ backgroundColor: '#ffb703', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(9, 44, 95)' }}
            iconStyle={{ background: 'rgb(9, 44, 95)', color: '#fff' }}
            icon={<AllInclusiveIcon />}
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
            <Typography variant="h4" gutterBottom>
              All Round Development
            </Typography>
            <Typography variant="body1" paragraph>
                RGUKT RK Valley fosters all-round development by offering diverse opportunities beyond academics, including research, industry interactions, and extracurricular activities. This approach ensures students develop technical expertise, leadership, communication, and problem-solving skills, preparing them for successful careers and impactful contributions to their fields.
            </Typography>
            </motion.div>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </Container>
     
    </Container>
  );
}

export default TimelineWithAnimation;

import {React,useState} from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';
import AllInclusiveOutlinedIcon from '@mui/icons-material/AllInclusiveOutlined';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
// import { responsiveFontSizes } from '@mui/material';


function HomeSection() {
    const [open, setOpen] = useState(false);
const [dialogType, setDialogType] = useState(null);  // To track which button was clicked

// Function to handle button click and show dialog with respective content
const handleClickOpen = (type) => {
  setDialogType(type);
  setOpen(true);
};

const handleClose = () => {
  setOpen(false);
  setDialogType(null);  // Reset the dialog type after closing
};
  return (
    <Container maxWidth="lg">
      <Grid 
        container 
        spacing={2} 
        justifyContent="center" // Center horizontally
        // alignItems="center"     // Center vertically
        sx={{ background: 'rgb(9, 44, 95)', padding: '15px',paddingLeft:{ lg: '60px' },paddingRight:{ lg: '60px' }, minHeight: '80vh',color:'#fff' }} // Background color  // Optional: To make sure it takes the full height of the viewport
      >
        {/* First Row: Full Width */}
        <Grid item xs={12} style={{ textAlign: 'center' }} >
          <Typography variant="h5" sx={{fontWeight:'500',marginBottom:'10px'}}>why IIIT RK VALLEY</Typography>
          <Typography variant="body1" sx={{ fontSize: { xs: '12px', lg: '14px' } }}>
          Rajiv Gandhi University of Knowledge Technologies (RGUKT), RK Valley, was established in 2008 with the goal of providing high-quality education to the rural youth of Andhra Pradesh, India. Recognized for its unique six-year integrated B.Tech program, RGUKT RK Valley combines advanced secondary education and engineering education. It emphasizes research, innovation, and holistic development in the fields of engineering, technology, and sciences, striving to nurture students into skilled professionals and leaders in their respective fields.Education at RGUKT is based on the intensive use of Information Technology. Every student has access to a laptop and education uses the latest advances in Learning Sciences such as Learning by Example, Learning by Doing and Problem-based Learning. Online lectures are provided and lectures are followed by problem solving sessions that reinforce what has been covered in each lecture.

          </Typography>
        </Grid>

        {/* Second Row: 4 Columns */}
        <Grid item xs={12} md={3} style={{textAlign:'center'}}>
        <ShareOutlinedIcon sx={{ fontSize: '24px', color: 'white', marginBottom: '5px' }} />
          <Typography variant="h6" sx={{fontWeight:'600'}}>Alumni</Typography>
          <Typography variant="body1" sx={{ fontSize: { xs: '12px', lg: '14px' } }}>Our alumni have achieved success and excelled in diverse professions worldwide. This network greatly enriches the growth of our community.</Typography>
          <Button 
            variant="contained" 
            onClick={() => handleClickOpen(1)}
            sx={{ backgroundColor: 'white', color: 'black', borderColor: 'black' ,fontSize: '10px', // Reduced font size
                padding: '3px 6px', // Reduced padding
                height: 'auto','&:hover': {
                backgroundColor: '#f0f0f0', // Light grey on hover
                borderColor: 'black'
              }}} // White background, black text
            style={{ marginTop: '16px' }} // Optional margin for spacing
          >
            know more
          </Button>
        </Grid>

        <Grid item xs={12} md={3} style={{textAlign:'center'}}>
          <StarBorderOutlinedIcon sx={{ fontSize: '24px', color: 'white', marginBottom: '5px' }}/>
          <Typography variant="h6" sx={{fontWeight:'600'}}>Rankings</Typography>
          <Typography variant="body1" sx={{ fontSize: { xs: '12px', lg: '14px' } }}>Recognized for excellence, RGUKT RK Valley is a leading institute in technical education, committed to innovation, academic rigor, and the holistic development of students.
          </Typography>
          <Button 
            variant="contained" 
            onClick={() => handleClickOpen(2)}
            sx={{ backgroundColor: 'white', color: 'black', borderColor: 'black' ,fontSize: '10px', // Reduced font size
                padding: '3px 6px', // Reduced padding
                height: 'auto','&:hover': {
                backgroundColor: '#f0f0f0', // Light grey on hover
                borderColor: 'black'
              }}} // White background, black text
            style={{ marginTop: '16px' }} // Optional margin for spacing
          >
            know more
          </Button>
        </Grid>

        <Grid item xs={12} md={3} style={{textAlign:'center'}}>
            <WorkspacePremiumOutlinedIcon sx={{ fontSize: '24px', color: 'white', marginBottom: '5px' }}/>
          <Typography variant="h6" sx={{fontWeight:'600'}}>Admission Process</Typography>
          <Typography variant="body1" sx={{ fontSize: { xs: '12px', lg: '14px' } }}>RGUKT RK Valley selects talented students through a rigorous process, empowering promising individuals from rural areas to excel in engineering and technology.</Typography>
          <Button 
            variant="contained" 
            onClick={() => handleClickOpen(3)}
            sx={{ backgroundColor: 'white', color: 'black', borderColor: 'black' ,fontSize: '10px', // Reduced font size
                padding: '3px 6px', // Reduced padding
                height: 'auto','&:hover': {
                backgroundColor: '#f0f0f0', // Light grey on hover
                borderColor: 'black'
              }}} // White background, black text
            style={{ marginTop: '16px' }} // Optional margin for spacing
          >
            know more
          </Button>
        </Grid>

        <Grid item xs={12} md={3} style={{textAlign:'center'}}>
        <AllInclusiveOutlinedIcon sx={{ fontSize: '24px', color: 'white', marginBottom: '5px' }} />
          <Typography variant="h6" sx={{fontWeight:'550'}}>All Round Development</Typography>
          <Typography variant="body1" sx={{ fontSize: { xs: '12px', lg: '14px' } }}>Skills, aptitude, and perception shape personal and professional identity. We offer diverse opportunities for growth, enhancing academic knowledge, professional skills, and personal attributes, preparing individuals for success in their careers and lives.</Typography>
          <Button 
            variant="contained" 
            onClick={() => handleClickOpen(4)}
            sx={{ backgroundColor: 'white', color: 'black', borderColor: 'black' ,fontSize: '10px',// Reduced font size
                padding: '3px 6px', // Reduced padding
                height: 'auto',
                '&:hover': {
                backgroundColor: '#f0f0f0', // Light grey on hover
                borderColor: 'black',
              }}} // White background, black text
            style={{ marginTop: '16px' }} // Optional margin for spacing
          >
            know more
          </Button>
        </Grid>
      </Grid>
       {/* Dialog Box */}
       <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
      >
        <DialogTitle id="dialog-title">
          {dialogType === 1 && "Alumni"}
          {dialogType === 2 && "Rankings"}
          {dialogType === 3 && "Admission Process"}
          {dialogType === 4 && "All Round Development"}
        </DialogTitle>

        <DialogContent>
          <DialogContentText id="dialog-description">
            {dialogType === 1 && (
              <p>
               Our alumni have achieved remarkable success across a wide range of professions around the globe, serving as a testament to the quality of education and holistic development at our institution. They have made significant contributions in fields such as technology, research, entrepreneurship, public service, and more. This dynamic network of accomplished individuals not only serves as a source of inspiration for current students but also plays a crucial role in fostering growth, collaboration, and opportunities within our community. Their continued engagement and support help strengthen our institution’s legacy and global presence.An organization’s alumini are the reflection of its past , representation of its present and a link to its future.  An alumnus is a former student who graduated from the College or University. Our Alumni organize social events, publish newsletters or magazines, and raise funds for the college through their association. Many provide a variety of benefits and services that help alumni maintain connections to their educational institution and fellow graduates. They bring all students together on a single platform and develops synergistic plans to aid and improve Institutional endeavours. They also conducts regular meetings wherein the members freely and closely interact with each other on issues pertaining to development of the college and also their role and contribution. Their ideas and suggestions are duly recognized and implemented by the college administration. Such groups often support new alumni, and provide a forum to form new friendships and business relationships with people of similar background.

              </p>
            )}
            {dialogType === 2 && (
              <p>
               RGUKT RK Valley, known for its unique integrated B.Tech program, is dedicated to nurturing future leaders in engineering and technology. Our commitment to academic excellence is evident in our rigorous curriculum, hands-on learning approach, and emphasis on research and innovation. Over the years, we have made remarkable progress in producing skilled graduates who excel in various professional fields. The accomplishments of our students and faculty reflect our drive for continuous growth and our mission to provide top-quality education, especially to the rural youth of Andhra Pradesh. Our campus is rapidly building its reputation as a hub of learning, innovation, and societal contribution.RGUKT RK Valley is recognized for its unique educational model, especially its integrated B.Tech program aimed at rural youth, and has made significant progress in terms of student development, academic innovation, and research. While it may not hold the top spot in national rankings, it has gained a solid reputation for its quality of education and commitment to student success.The university focuses on a six-year integrated B.Tech program, where the final-year students often secure placements in various companies, including IT, core engineering, and other sectors. While specific placement statistics, such as average package or placement percentage, may vary yearly, RGUKT RK Valley has seen consistent improvement in its placement record, attracting companies both at national and regional levels.Many students got internships at IIIT, HCL, TCS, Wipro, Tessolve, Medho Servo, etc.The RGUKT RK Valley campus has been awarded a B+ grade by the National Assessment and Accreditation Council (NAAC). This recognition underscores our commitment to maintaining quality standards in education and continuous improvement. The B+ grade reflects our progress and efforts in providing a robust academic environment while also highlighting areas for future development and enhancement.

              </p>
            )}
            {dialogType === 3 && (
              <p>
                All students admitted to RGUKT RK Valley are chosen through a meticulous selection process that identifies and attracts high-potential candidates. This thorough screening ensures that we are nurturing exceptional talent from diverse backgrounds, particularly from rural areas. Our aim is to provide these promising individuals with a platform to develop their skills and reach their full potential in engineering and technology. By focusing on both academic excellence and personal growth, we are committed to shaping the next generation of leaders and innovators in the field.The admission process for Rajiv Gandhi University of Knowledge Technologies (RGUKT) at RK Valley (Idupulapaya) generally follows a structured procedure, mainly based on merit, particularly for the Bachelor of Technology (B.Tech) program.The admission process at RGUKT RK Valley is designed to identify and select top talent from across various regions. Candidates must first meet specific eligibility criteria, which include academic qualifications and age limits.The next step involves a rigorous entrance examination that assesses candidates' knowledge in subjects relevant to engineering. This examination helps ensure that only those with the requisite academic skills advance to the next stage.Following the exam, candidates submit their application forms, which are reviewed to shortlist individuals based on their performance and academic records. Shortlisted candidates may be invited for counseling or interviews to further evaluate their suitability for the program.
                Final selections are made based on the entrance exam results, academic performance, and interview outcomes. Successful candidates receive an admission offer and, upon acceptance, complete the enrollment process, including document verification and fee payment. This thorough process ensures that RGUKT RK Valley admits students who are not only academically capable but also motivated to excel in their studies.

              </p>
            )}
            {dialogType === 4 && (
              <p>
                Recognizing that skills, aptitude, and perception are critical components of an individual's growth, we provide extensive opportunities for comprehensive development. Our approach goes beyond traditional academics to offer a rich blend of coursework, research initiatives, industry interactions, and extracurricular activities.This multifaceted strategy ensures that students not only acquire technical expertise but also develop essential leadership, communication, and problem-solving skills. By engaging in diverse programs, students are prepared to meet the evolving demands of the professional landscape and emerge as well-rounded, impactful professionals ready to excel in their careers and contribute meaningfully to their fields.
                By engaging in diverse initiatives and programs, students at RGUKT RK Valley are equipped to achieve significant personal and professional milestones. We are dedicated to nurturing their potential and helping them emerge as well-rounded, capable individuals ready to make impactful contributions in their chosen fields.

              </p>
            )}
          </DialogContentText>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}

export default HomeSection;

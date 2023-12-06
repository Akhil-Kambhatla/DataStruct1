// import React, { useState } from 'react';
// import { useAuth0 } from '@auth0/auth0-react';
// // import './timeline.css';
// // import './timeline1.css';

// const Timeline = () => {
//   const [activeStep, setActiveStep] = useState(0);

//   const handleStepClick = (index) => {
//     setActiveStep(index);
//   };

//   const calculateStepWidth = () => {
//     return (activeStep / (steps.length - 1)) * 100 + '%';
//   };

//   const steps = [
//     'Intro',
//     'array',
//     'matrix',
//     'string',
//     'search and sort',
//     'linked list',
//     'Binary trees',
//     'bst',
//     'greedy',
//     'backtracking',
//     'stacks and queues',
//     'heap',
//     'graph',
//     'trie',
//     'dynamic programming',
//     'bit manipulation',
//   ];

//   const links = [
//     'https://www.javatpoint.com/data-structure-introduction',
//     'https://www.javatpoint.com/data-structure-array',
//     'https://www.javatpoint.com/sparse-matrix',
//     'https://www.javatpoint.com/python-strings',
//     'https://www.javatpoint.com/linear-search',
//     'https://www.javatpoint.com/binary-search',
//     'https://www.javatpoint.com/bubble-sort',
//     'https://www.javatpoint.com/heap-sort',
//     'https://www.javatpoint.com/insertion-sort',
//     'https://www.javatpoint.com/merge-sort',
//     'https://www.javatpoint.com/radix-sort',
//     'https://www.javatpoint.com/quick-sort',
//     'https://www.javatpoint.com/selection-sort',
//     'https://www.javatpoint.com/ds-linked-list',
//     'https://www.javatpoint.com/binary-tree',
//     'https://www.javatpoint.com/binary-search-tree',
//     'https://www.javatpoint.com/greedy-algorithms',
//     'https://www.javatpoint.com/backtracking-introduction',
//     'https://www.javatpoint.com/data-structure-stack',
//     'https://www.javatpoint.com/data-structure-queue',
//     'https://www.javatpoint.com/heap-data-structure',
//     'https://www.javatpoint.com/ds-graph',
//     'https://www.javatpoint.com/trie-data-structure',
//     'https://www.javatpoint.com/dynamic-programming',
//     'https://www.javatpoint.com/bit-manipulation-cpp',
//   ];

//   return (
//     <div>
//       <h1>DSA TOPICS</h1>
//       <br />
//       {/* Import ionicons directly in your project or use a React component if available */}
//       <div className="process-wrapper">
//         <div id="progress-bar-container">
//           <ul>
//             {steps.map((step, index) => (
//               <li
//                 key={index}
//                 className={`step step0${index + 1} ${activeStep >= index ? 'active' : ''}`}
//                 onClick={() => handleStepClick(index)}
//               >
//                 <div className="step-inner">{step}</div>
//               </li>
//             ))}
//           </ul>
//           <div id="line">
//             <div id="line-progress" style={{ width: calculateStepWidth() }}></div>
//           </div>
//         </div>
//         <div id="progress-content-section">
//           {steps.map((step, index) => (
//             <div
//               key={index}
//               className={`section-content step${index + 1} ${activeStep === index ? 'active' : ''}`}
//             >
//               <h2>{`Introduction to ${step}`}</h2>
//               <a href={links[index]}>{step}</a>
//               <ion-icon name="newspaper-outline"></ion-icon>
//               <h2>Youtube link for reference</h2>
//               <a href={links[index]}>
//                 <ion-icon name="logo-youtube"></ion-icon>
//               </a>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Timeline;


import React, { useState } from 'react';
import {
  Typography,
  Button,
  Container,
  Paper,
  Step,
  StepLabel,
  Stepper,
  Link,
  Grid,
  Popover,
  IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const DsaTopics = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [popupContent, setPopupContent] = useState(null);
  const [youtubeLinks,setyoutubeLinks]=useState(null);
  const set = async () => {
    try {
      const dataw = await fetch('http://localhost:5000/Timeline');
      console.log(dataw)
      setyoutubeLinks(dataw)
    } catch (error) {
      console.error('Error fetching comments:', error);
    }
  };
  set()
  console.log(youtubeLinks)
  const handleStepClick = (index) => {
    setActiveStep(index);
    setPopupContent(
      <div sx={{ padding: '20px', textAlign: 'center' }}>
        {/* Content for the popup */}
        <Typography variant="h2" sx={{ fontSize: '17px', textTransform: 'uppercase', color: 'black', letterSpacing: '1px', marginBottom: '10px' }}>
          Introduction to {steps[index]}
        </Typography>
        <Link href={links[index]}>{steps[index]}</Link>
        <ion-icon name="newspaper-outline"></ion-icon>
        <Typography variant="h2" sx={{ fontSize: '17px', textTransform: 'uppercase', color: 'black', letterSpacing: '1px', marginBottom: '10px' }}>
          Youtube link for reference
        </Typography>
        <a href={youtubeLinks[index]} target="_blank" rel="noopener noreferrer">
          <ion-icon name="logo-youtube"></ion-icon>
          Watch on YouTube
        </a>
        <IconButton sx={{ position: 'absolute', top: 5, right: 5 }} onClick={handleClosePopup}>
          <CloseIcon />
        </IconButton>
      </div>
    );
    setPopupOpen(true);
  };


  const handleClosePopup = () => {
    setPopupOpen(false);
  };

  const calculateStepWidth = () => {
    return (activeStep / (steps.length - 1)) * 100 + '%';
  };

  const steps = [
    'Intro',
    'Arrays',
    'Linked Lists',
    'Stacks',
    'Queues',
    'Trees',
    'Graphs',
    'Hashing',
    'Sorting',
    'Searching',
    'Dynamic Programming',
    'Greedy Algorithms',
    'Bit Manipulation',
  ];

  const links = [
    'https://www.javatpoint.com/data-structure-introduction',
    'https://www.javatpoint.com/array-data-structure',
    'https://www.javatpoint.com/linked-list',
    'https://www.javatpoint.com/stack-data-structure',
    'https://www.javatpoint.com/queue-data-structure',
    'https://www.javatpoint.com/tree-data-structure',
    'https://www.javatpoint.com/graph-data-structure',
    'https://www.javatpoint.com/hashing-data-structure',
    'https://www.javatpoint.com/sorting-algorithms',
    'https://www.javatpoint.com/searching-algorithms',
    'https://www.javatpoint.com/dynamic-programming',
    'https://www.javatpoint.com/greedy-algorithm',
    'https://www.javatpoint.com/bit-manipulation-cpp',
  ];

  // const youtubeLinks = [
  //   'https://www.youtube.com/watch?v=xLetJpcjHS0',
  //   'https://www.youtube.com/watch?v=p5TDnxAYAZY',
  //   'https://www.youtube.com/watch?v=JYyBg2WT68',
  //   'https://www.youtube.com/watch?v=g4uzVf-7SM8',
  //   'https://www.youtube.com/watch?v=8TVaEGeaGGc',
  //   'https://www.youtube.com/watch?v=TWMCMvfEAv4&t=1s',
  //   'https://www.youtube.com/watch?v=-DzowlcaUmE',
  //   'https://www.youtube.com/watch?v=cySVml6e_Fc',
  //   'https://www.youtube.com/watch?v=v0eQ4nXJjsk',
  //   'https://www.youtube.com/watch?v=DKCbsiDBN6c',
  //   'https://www.youtube.com/watch?v=rHQI4mrJ3cg',
  //   'https://www.youtube.com/watch?v=ywx-Onrdx4U',
  //   'https://www.youtube.com/watch?v=TwdjOQMTaQ4',
  //   'https://www.youtube.com/watch?v=soJgGe1CQHw',
  //   'https://www.youtube.com/watch?v=5dRGRueKU3M&list=PLJULIlvhz0rE83NKhnq7acXYIeA0o1dXb',
  //   'https://www.youtube.com/watch?v=Db8OmMfzwl8',
  // ];
  

  return (
    <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel onClick={() => handleStepClick(index)}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Paper
        sx={{
          position: 'relative',
          marginTop: '20px',
          marginBottom: '20px',
          backgroundColor: '#f3f3f3',
          borderRadius: '8px',
        }}
      >
        <div
          sx={{
            width: '6px',
            height: '100%',
            backgroundColor: '#000',
            borderRadius: '50px',
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
          }}
        />
        <div
          sx={{
            width: calculateStepWidth(),
            height: '100%',
            backgroundColor: '#207893',
            borderRadius: '50px',
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            transition: 'all ease 0.9s',
          }}
        />
      </Paper>
      {/* Popup */}
      <Popover
        open={isPopupOpen}
        anchorReference="anchorPosition"
        anchorPosition={{ top: '50%', left: '50%' }}
        transformOrigin={{ vertical: 'center', horizontal: 'center' }}
        onClose={handleClosePopup}
      >
        {popupContent}
      </Popover>
    </Container>
  );
};



export default DsaTopics;



import React, { useState, useEffect } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Slide from '@mui/material/Slide';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link as ScrollLink, Element } from 'react-scroll';
import './App.css';

interface SlideTextProps {
  text: string;
  href?: string;
  delay: number;
}

const SlideText: React.FC<SlideTextProps> = ({ text, href, delay }) => {
  const [slideIn, setSlideIn] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSlideIn(true);
    }, delay);

    return () => clearTimeout(timeout);
  }, [delay]);

  return (
    <Slide direction="down" in={slideIn} timeout={500}>
      <a
        href={href ?? ''}
        style={{
          fontSize: '3rem',
          textDecoration: 'none',
          color: 'white',
          transition: 'transform 0.2s',
          textShadow: ' 8px 8px 4px rgba(0, 0, 0, 0.5)',
        }}
      >
        {text}
      </a>
    </Slide>
  );
};

function App() {
  const theme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  const containerStyles: React.CSSProperties = {
    background: `url(${process.env.PUBLIC_URL}/Graeme Travers Pexelscom.png)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  };
  

  const slideTexts = [
    { text: 'Linus Arvid Wass' },
    { text: 'Resume', href: 'section2' },
    { text: 'Projects', href: 'section3' },
    { text: 'Contact', href: 'section4' },
  ];

  return (
    <ThemeProvider theme={theme}>
      <div style={containerStyles} className="App">
        <header className="App-header">
          {slideTexts.map((text, index) => (
            <ScrollLink key={index} to={text.href ?? ''} smooth={true} duration={500}>
              <SlideText text={text.text} href={`#${text.href}`} delay={1000 + index * 300} />
            </ScrollLink>
          ))}
        </header>

        {/* Section 2: Resume */}
        <Element name="section2" className="section">
          <h2 style={{ color: 'white', fontSize: '3rem', textAlign: 'center', margin: '20px 0' }}>
            Resume
          </h2>

          <h3 style={{ color: 'white', fontSize: '2rem', textAlign: 'left', margin: '10px 0', textDecoration: 'underline' }}>
            Internship at AEL Sistemas in Brazil, via scholarship from Linneaus-Palme
          </h3>
          {/* Coding Experience Content */}
          
          <p style={{ color: 'white', fontSize: '1.5rem', textAlign: 'left', margin: '10px 0' }}>
            During the summer of 2023, I had the opportunity to participate in an internship at AEL Sistemas in Brazil, thanks to a scholarship from Linneaus-Palme.<br />
            My tasks included programming an FPGA and gaining insights into the production of chipsets for advanced technologies like JAS Gripen.<br />
            Additionally, I worked on developing programs to streamline the design process of their specific FPGA units.<br />
            Skills accumulated: Verilog & VHDL Experience, Excel coding, Understanding the concept of design for FPGA:s
          </p>

          <h3 style={{ color: 'white', fontSize: '2rem', textAlign: 'left', margin: '10px 0', textDecoration: 'underline' }}>
            Internship at Volvo Group Connected Solutions, Efficient Loadout, MyProfile
          </h3>
          {/* Coding Experience Content */}
          
          <p style={{ color: 'white', fontSize: '1.5rem', textAlign: 'left', margin: '10px 0' }}>
            During the fall of 2023, I got to experience how working in a scrum-team was like. During my team here I got to take part in the sprint-planning <br />
            in which I got to make a "My Profile" page for the users, being able to fetch and edit information that is central to the user itself. <br />
            Skills accumulated: <br />
            * Frontend (Javascript, Typescript, graphql query, React, NodeJs,) <br />
            * Backend (Java, Mockito) <br />
            * Version Control (Git, Gerrit) <br />
            * Planning (Scrum-team, Sprints, Backlog etc.)
          </p>

        </Element>

        {/* Section 3: Projects */}
        <Element name="section3" className="section">
          <h2 style={{ color: 'white', fontSize: '3rem', textAlign: 'center', margin: '20px 0' }}>
            Section 3: Projects
          </h2>
          <p style={{ color: 'white', fontSize: '1.5rem', textAlign: 'center', margin: '10px 0' }}>
            Coming soon...
          </p>
        </Element>

        {/* Section 4: Contact */}
        <Element name="section4" className="section">
          <h2 style={{ color: 'white', fontSize: '3rem', textAlign: 'center', margin: '20px 0' }}>
            Section 4: Contact
          </h2>
          <p style={{ color: 'white', fontSize: '1.5rem', textAlign: 'center', margin: '10px 0' }}>
            <PhoneIcon/> +46 705184014 <EmailIcon/>Email: Linus.Wass@gmail.com <LinkedInIcon/>LinkedIn: <a href="https://linkedin.com/in/linus-wass/" target="_blank" rel="noopener noreferrer">Click Here</a>
          </p>
        </Element>
      </div>
    </ThemeProvider>
  );
}

export default App;

import { useRef, useState } from "react";
import './App.css'
import 'animate.css';
import { motion } from "motion/react";

//Images
import profilePic from "./assets/images/Profile Pic.jpg";

import java from "./assets/images/java.png";
import javaScript from "./assets/images/javascript.png";
import nodeJS from "./assets/images/nodejs.jpg";
import expressJS from "./assets/images/expressjs.jpg";
import oracle from "./assets/images/oracle.png";
import postgre from "./assets/images/postgreSQL.png";
import react from "./assets/images/react.jpg";
import html from "./assets/images/html.png";
import css from "./assets/images/css.png";

import fullSnack from "./assets/images/fullSnackDev.jpg";
import lap2 from "./assets/images/laptopPic2.jpg";
import bluePolygon from "./assets/images/futuristic-dark.avif";
import passion from "./assets/images/passionLedUsHere.jpg";
import skillsBackground from "./assets/images/peakpx(7).jpg";
import projectOne from "./assets/images/peakpx(8).jpg";
import projectsBackground from "./assets/images/peakpx(4).jpg";

//Icons
import github from "./assets/images/github.png";
import insta from "./assets/images/instagramBlack.png";
import linkedIn from "./assets/images/linkedinBlack.png";


function App() {

  {/**CASCADE EFFECT */}
  const container = {
    initial: { opacity: 0, x: 100},
    animate: (index) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.2 * index
      }
    })
  }

  {/**------------- */}


{/**ENCRYPT EFFECT ----------------------------------------------*/}

const TARGET_TEXT = "Hello everybody, I am Matej Mandir";

const CYCLES_PER_LETTER = 1;

const SHUFFLE_TIME = 50;

const CHARS = "!@#$%^&*():{};|,.<>/?";

const intervalRef = useRef(null);

const [text, setText] = useState(TARGET_TEXT);


const scramble = () => {

  var pos = 0;
  
  intervalRef.current = setInterval(() => {
    
    const scrambled = TARGET_TEXT.split("")
      .map((char, index) => {

        if (pos / CYCLES_PER_LETTER > index) {
          
          return char;
        }
        const randomCharIndex = Math.floor(Math.random() * CHARS.length);

        const randomChar = CHARS[randomCharIndex];
        
        return randomChar;
      })
      .join("");
    
    setText(scrambled);
    pos++;

    if (pos >= TARGET_TEXT.length) {
      stopScramble();
    }

  }, SHUFFLE_TIME);

};

const stopScramble = () => {
  clearInterval(intervalRef.current || undefined);
  setText(TARGET_TEXT);
};

{/**---------------------------------------------------------------- */}


return (
  <>
  <main id="main-container">

    {/**FIRST PART---------------------------------------------------------------------- */}
    <div id="profile">

      <div className="profile-background">
        <img src={lap2} alt="" />
      </div>
      
      <div className="profile-front">

        <motion.div id="heading" 
                    initial={{opacity:0, translateY: "-100%"}}
                    whileInView={{opacity: 1, translateY: "0%"}}
                    transition={{ease: "easeOut", duration: 0.5}}
                    viewport={{ once: true }}
                    >
          <div className="linki">
            <a onClick={(e) => { e.preventDefault()
                                  const element = document.querySelector(".about-me");
                                  element?.scrollIntoView({
                                      behavior: 'smooth'
                                  }); 
              }} href="about-me">About</a>
          </div>
          <div className="linki">
        
              <a onClick={(e) => { e.preventDefault()
                                  const element = document.querySelector(".skills");
                                  element?.scrollIntoView({
                                      behavior: 'smooth'
                                  }); 
              }} href="about-me">Skills</a>
            
          </div>
          <div className="linki">
          
              <a onClick={(e) => { e.preventDefault()
                                const element = document.querySelector(".projects");
                                element?.scrollIntoView({
                                    behavior: 'smooth'
                                }); 
              }} href="about-me">Projects</a>
          </div>
        </motion.div>


        <div id="image-greeting">
          <motion.div className="profile-pic" 
                      initial={{opacity:0, translateY: "-100%"}}
                      whileInView={{opacity: 1, translateY: "0%"}}
                      transition={{ease: "easeOut", duration: 0.5}}
                      viewport={{ once: true }}>
            <img src={profilePic} alt=""/>
          </motion.div>
          
          <motion.div className="profile-text" 
                      initial={{opacity:0, translateY: "-100%"}}
                      whileInView={{opacity: 1, translateY: "0%"}}
                      transition={{duration: 0.5}}
                      viewport={{ once: true }}>
            <motion.h1 initial={scramble}>{text}</motion.h1>
            <p>I am a self-taught web developer that is trying to succeed in this AI era.</p>
          </motion.div>
        </div>

        
        <motion.div id="links" 
                    initial={{opacity:0, translateX: "-100%"}}
                    whileInView={{opacity: 1, translateX: "0%"}}
                    transition={{ease: "easeOut", duration: 0.5}}
                    viewport={{ once: true }}>
          <div className="links-inner">
              <a target="_blank" href="https://github.com/cybzuty"><img src={github} height={"30px"} alt="" /></a>
              <a target="_blank" href="https://www.linkedin.com/in/matejmandir1/"><img src={linkedIn} height={"30px"} alt="" /></a>
              <a target="_blank" href="https://www.instagram.com/"><img src={insta} height={"30px"} alt="" /></a>
          </div>
        </motion.div>
      
      </div>
    </div>

    {/**SECOND PART---------------------------------------------------------------------- */}
    {/**Every div Fade like it is creted from the same page */}
    <div className="about-me">

           <motion.img src={bluePolygon} alt="" 
                initial={{opacity:0, translateX: "100%"}}
                whileInView={{opacity: 1, translateX: "0%"}}
                transition={{ease: "easeOut", duration: 0.7}}
                viewport={{ once: true }}/> 


           <div className="about-me-text">
                      
              <motion.h1 initial={{opacity:0, translateX: "-100%"}}
                         whileInView={{opacity: 1, translateX: "0%"}}
                         transition={{ease: "easeOut", duration: 0.5, delay: 0.3}}
                         viewport={{ once: true }}>
                          About Me
              </motion.h1>

              <motion.p initial={{opacity:0, translateZ: "100%"}}
                        whileInView={{opacity: 1, translateZ: "0%"}}
                        transition={{ease: "easeOut", duration: 0.5, delay: 0.5}}
                        viewport={{ once: true }}>
                  Well, my programming journey started a couple of years ago when I did a programming curse for Java SE8. 
                  After that, I tried to get a job... Oh, how naive I was... 
              </motion.p>    

              <motion.p initial={{opacity:0, translateX: "-100%"}}
                        whileInView={{opacity: 1, translateX: "0%"}}
                        transition={{ease: "easeOut", duration: 0.5, delay: 0.7}}
                        viewport={{ once: true }}>
                  Yes, I learned Java and got a certificate, but there is much more to know in order to be competitive and to finally 
                  get the desired job. Unfortunately, I did a bigger pause from programming, thinking I can't get a job because I don't have a degree.
              </motion.p>

              <motion.p initial={{opacity:0, translateX: "100%"}}
                        whileInView={{opacity: 1, translateX: "0%"}}
                        transition={{ease: "easeOut", duration: 0.5, delay: 1.2}}
                        viewport={{ once: true }}>
                  Then, last year, I started to learn Web development with JavaScript. I like the challenge, and mostly it's fun. Yeah, sometimes it 
                  can be stressful, but it is rewarding once you find a solution to a troubling problem or once you finally complete, 
                  or better, "complete" your project. I finished a couple of courses and books and did a couple of little projects.
              </motion.p>   

              <motion.p initial={{opacity:0, translateX: "-100%"}}
                        whileInView={{opacity: 1, translateX: "0%"}}
                        transition={{ease: "easeOut", duration: 0.5, delay: 1.5}}
                        viewport={{ once: true }}>
                    My latest project, <b>Earth, Space and Science</b>, was a bit bigger, well, at least for me. It is still not finished, 
                  there are things that need to be improved and more things that I want to implement, like chat, simple games etc.
              </motion.p> 

              <div className="classWithImg">
                <motion.p initial={{opacity:0, translateX: "100%"}}
                          whileInView={{opacity: 1, translateX: "0%"}}
                          transition={{ease: "easeOut", duration: 0.5, delay: 1.7}}
                          viewport={{ once: true }}>
                    I gained a lot of knowledge and improved a lot, but I realize there's 
                    still much to learn in order to achieve my goal of becoming a <b>Full-Stack Developer</b>.
                      
                    <img id="imgHov" src={fullSnack} alt="" />  
                </motion.p>
              </div> 
              
           </div>
    </div>
  
    {/**THIRD PART---------------------------------------------------------------------- */}
    <motion.div className="skills"
                initial={{opacity:0, translateZ: "-100%"}}
                whileInView={{opacity: 1, translateZ: "100%"}}
                transition={{duration: 2}} 
                viewport={{ once: true }}
                >

        <div className="skills-background">
              <img src={skillsBackground} alt="" />
        </div>
         
        <div className="skills-front">

          <h1>Skills</h1>
            
          <div className="part">
            <p>Apart from <b>Java SE8</b>, I learned how to do Frontend with <b>JavaScript</b>, <b>HTML</b> & <b>CSS</b>. 
              I also learned to work with the <b>React</b> library, with which I made my last project.<br /><br />
              On Backend, I learned to work with <b>Node.js</b> and <b>Express.js</b>. <br /><br />
              And for the database I learned to use <b>PostgreSQL</b>.
            </p>
          </div>

          <motion.div className="images" 
                      initial={{opacity:0, translateZ: "-100%"}}
                      whileInView={{opacity: 1, translateZ: "100%"}}
                      transition={{duration: 2}}
                      viewport={{ once: true }}> 
            <motion.div className="logos"
                        variants={container}
                        initial="initial"
                        whileInView="animate"
                        custom={1}
                        viewport={{ once: true }}
                        >  {/**CASCADE EFFECT */}
              <img src={java} alt="Java" />
            </motion.div>
            <motion.div variants={container}
                        initial="initial"
                        whileInView="animate"
                        custom={2}
                        viewport={{ once: true }} className="logos">
              <img src={oracle} alt="Certificate" />
            </motion.div>
            <motion.div variants={container}
                        initial="initial"
                        whileInView="animate"
                        custom={3}
                        viewport={{ once: true }} className="logos">
              <img src={javaScript} alt="JavaScript" />
            </motion.div >
            <motion.div variants={container}
                        initial="initial"
                        whileInView="animate"
                        custom={4}
                        viewport={{ once: true }} className="logos">
              <img src={html} alt="HTML" />
            </motion.div>
            <motion.div variants={container}
                        initial="initial"
                        whileInView="animate"
                        custom={5}
                        viewport={{ once: true }} className="logos">
              <img src={css} alt="CSS" />
            </motion.div>
            <motion.div variants={container}
                        initial="initial"
                        whileInView="animate"
                        custom={6}
                        viewport={{ once: true }} className="logos">
              <img src={react} alt="React" />
            </motion.div>
            <motion.div variants={container}
                        initial="initial"
                        whileInView="animate"
                        custom={7}
                        viewport={{ once: true }} className="logos">
              <img src={nodeJS} alt="nodeJS" />
            </motion.div>
            <motion.div variants={container}
                        initial="initial"
                        whileInView="animate"
                        custom={8}
                        viewport={{ once: true }} className="logos">
              <img src={expressJS} alt="expressJS" />
            </motion.div>
            <motion.div variants={container}
                        initial="initial"
                        whileInView="animate"
                        custom={9}
                        viewport={{ once: true }} className="logos">
              <img src={postgre} alt="postgreSQL" />
            </motion.div>
          </motion.div>

        </div>

    </motion.div>

      
    {/**FOURTH PART---------------------------------------------------------------------- */}        
    <div className="projects">

      <div className="projects-background">
         <img src={passion} alt="" />
      </div>

      <div className="projects-front">
        <div className="projects-title">
          <h1>Projects</h1>
        </div>
        
        <div className="single-projects">
          <a className="single" target="_blank" href="https://github.com/cybzuty/Earth-Space-and-Science">
            <h1>Earth, Space and Science </h1>
            <img src={projectOne} alt="Earth, Space and Science" />
          </a>

          <a className="single" href="">
            <h1>Coming up...</h1>
            <img src={projectsBackground} alt="" />
          </a>
        </div> 
      </div>
      
    </div>
    
  </main>
  </>
)
}

export default App

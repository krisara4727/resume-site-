import './Home.css';
import { useState, useRef } from 'react';
import EmailIcon from '@material-ui/icons/Email';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import {IconButton}  from '@material-ui/core';
import recent from './images/recentWork.jpeg';
import contactImage from './images/certification2.jpg';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import {Link } from 'react-router-dom';


function App() {
  const divRef = useRef(null);
  const docRef = useRef(null);
  //const [currentClass, setCurrentClass] = useState('');
  const [mouseX, setMouseX] = useState(0);
  const [mouseY ,setMouseY] = useState(0);
  const [lastXDeg, setLastXDeg] = useState(180);
  const [lastYDeg, setLastYDeg] = useState(180);
  const [newStyle,setNewStyle] = useState('')
  const [name , setName] = useState('socialMedia');
  const [work,setWork] = useState('');



const getAngel = (x) => {
  //console.log('get angle   ',180-360*x);
  return (180-360*x)/1.7;
}


/*
  const choosenSide = (e) => {  
    if(currentClass){
      divRef.current.classList.remove(`show-${currentClass}`);
    }
    divRef.current.classList.add(`show-${e.target.value}`);
    setCurrentClass(e.target.value);
  } 
  */ 
  
  const momentMouse = (e) => {
    //console.log(e.pageX/getWidth());
    setMouseX(e.pageX/getWidth());
    setMouseY(e.pageY/getHeight());
    //setInterval(rotateCube(),66);
    //console.log('get angel  ',getAngel(mouseX))
    setLastXDeg((lastXDeg+(getAngel(mouseX)-lastXDeg)*0.5));
    setLastYDeg((lastYDeg+(getAngel(mouseY)-lastYDeg)*0.5));
    setNewStyle(`translateZ(-150px) rotateY(${lastXDeg}deg) rotateX(${lastYDeg}deg)`);
    //console.log(newStyle);
    divRef.current.style.setProperty('transform', newStyle);
    //console.log('last x & y degree ',lastXDeg,lastYDeg);
    
  }

  const getWidth = () => {
    return Math.max(
      document.body.scrollWidth,
      document.documentElement.scrollWidth,
      document.body.offsetWidth,
      document.documentElement.offsetWidth,
      document.documentElement.clientWidth
    )
  }

  const getHeight = () => {
    return Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      document.documentElement.clientHeight
    )
  }

  const displayInside = (e) => {
    if(e.target.value){
      setName(e.target.value);
    }
    
  }

  return (
    <div className="app" ref={docRef} onMouseMove={momentMouse} >
      <div className='container'>
          <Link to='/certifications' style={{ textDecoration: 'none' }}>
            <div className='contact'>
              <ArrowForwardIcon 
              style={{fontSize:40}} /> 
              Certifications 
            </div>
          </Link>
        
        <div className='flex'>
            <div className='about_container'>
                <Link to='/about' style={{ textDecoration: 'none' }}>
                    <div className='about'><ArrowForwardIcon 
                style={{fontSize:40}} /> About</div> 
                </Link>
              
            </div>
            <div className="scene">
              <div className="cube" ref={divRef}>
                <div className="cube__face cube__face--front">
                  <span className="text">Hi, this is chivte krishna software developer engineer focused on developing apps.</span>
                </div>
  <div className="cube__face cube__face--back">back</div>
                <div className="cube__face cube__face--right">{work === 'recent stuff'?'recent stuff':(<img src={work} alt='recent Stuff' />)}</div>
                <div className="cube__face cube__face--left"><span className='text'>I am currently a fresher looking for a job for the position
                of software developer or mern stack developer.
                  </span></div>
                <div className="cube__face cube__face--top">
                  <span className='text'>{name}
                  <br />
                  {name==='EmailIcon'?<EmailIcon className='iconInside' style={{fontSize:80}} />
                  :name==='InstagramIcon'?<InstagramIcon className='iconInside' style={{fontSize:80}}/>
                  :name==='LinkedInIcon'?<LinkedInIcon className='iconInside' style={{fontSize:80}} />
                  :name ==='TwitterIcon'?<TwitterIcon className='iconInside' style={{fontSize:80}} />
                  : ''
                  }
                  </span>
                </div>
                <div className="cube__face cube__face--bottom"><img src={contactImage} alt='contact us' /></div>
              </div>
            </div>
            <div>
              <Link to='/works' style={{ textDecoration: 'none' }}>
                    <div className='works' onMouseOver={() => setWork(recent)} onMouseOut={() => setWork('recent stuff')}><ArrowForwardIcon 
                    style={{fontSize:40}} /> Works</div>
                </Link>
            </div>
        </div>
        <div className='bottom_line' onMouseOver={displayInside} onMouseLeave={() => setName(
          <div>
            <h1>@2020</h1>
            <p>Developed and designed by krishna.</p>
          </div>
        ) }>
            <Link to='/email'>
                <IconButton value='EmailIcon' ><EmailIcon className='icon' fontSize="large" /></IconButton>
            </Link> 
            <Link to='/insta'>
                <IconButton value='InstagramIcon' ><InstagramIcon className='icon' fontSize="large" /></IconButton>
            </Link>
            <Link to='/linkedIn'>
                <IconButton value='LinkedInIcon'><LinkedInIcon className='icon' fontSize="large" /></IconButton>
            </Link>
            <Link to='/twitter'>
                <IconButton value='TwitterIcon'><TwitterIcon className='icon' fontSize="large" /></IconButton>
            </Link>
        </div>
      
{/*
        <p className="radio-group" onChange={choosenSide}>
  <label>
    <input type="radio" name="rotate-cube-side" value="front" defaultChecked /> front
  </label>
  <label>
    <input type="radio" name="rotate-cube-side" value="right" /> right
  </label>
  <label>
    <input type="radio" name="rotate-cube-side" value="back" /> back
  </label>
  <label>
    <input type="radio" name="rotate-cube-side" value="left" /> left
  </label>
  <label>
    <input type="radio" name="rotate-cube-side" value="top" /> top
  </label>
  <label>
    <input type="radio" name="rotate-cube-side" value="bottom" /> bottom
  </label>
</p>
*/}
      </div>
      
    </div>
  );
}

export default App;

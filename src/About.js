import React from 'react';
import './About.css';
import CallMadeIcon from '@material-ui/icons/CallMade';
import {Link} from 'react-router-dom';

function About() {
    return (
        <div className='about_page'>
            <div className='about_text'>
                <Link to = '/' >
                    <CallMadeIcon fontSize="inherit" style={{fontSize:100}} className='about_backIcon' />
                </Link>
                
                <h2>Hi, this is chivte krishna software developer engineer focused on UI and developing apps.</h2>
            </div>
            <div className='about_introDiv'>
                <div className='about_intro'>
                <p>I am passionate about developing websites with a strong visual identity. It helps digital brands and companies move to the next level and increase user engagement.
                    I always feel building and developing things is like playing video games and its fun. 
                </p>
                </div>
            </div>
            
        </div>
    )
}

export default About

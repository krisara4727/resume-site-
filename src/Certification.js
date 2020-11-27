import React from 'react';
import './Certification.css';
import mlCertificate from './certifications/ml.png';
import ai from './certifications/ai.png';
import algo from './certifications/algo.png';
import CallMadeIcon from '@material-ui/icons/CallMade';
import {Link} from 'react-router-dom';


function Certification() {
    return (
        <div className='certification'>
                {/*
                            <div className='certification_name'>
                <div className='perspective-text'>
                    <div className='perspective-line'>
                        <p></p>
                        <p>certifications</p>
                    </div>
                    <div className='perspective-line'>
                        <p>certifications</p>
                        <p>Machine learning</p>
                    </div>
                    <div className='perspective-line'>
                        <p>Machine Learning</p>
                        <p>Artificial Intelligence</p>
                    </div>
                    <div className='perspective-line'>
                        <p>Artificial Intelligence</p>
                        <p>DS and Algo</p>
                    </div>
                    <div className='perspective-line'>
                        <p>DS and Algo</p>
                        <p></p>
                    </div>
                </div>
            </div>
                */}
            
            <h1>Certifications</h1>
            <div className='certificate_page'>
                <img src={mlCertificate} alt='machine learning certification' />
                <div className='certificate_info'>
                    <h3>Machine Learning Certificate</h3>
                    <p>Completed this course from coursera online from the university of standford.</p>
                </div>
            </div>
            <div className='certificate_page'>
                <img src={algo} alt='machine learning certification' />
                <div className='certificate_info'>
                    <h3>Algorithmic Toolbox Certificate</h3>
                    <p>Completed this course from coursera online from the university of UC San Diego.</p>
                </div>
            </div>
            <div className='certificate_page'>
                <img src={ai} alt='machine learning certification' />
                <div className='certificate_info'>
                <h3>Artificial Intelligence Certificate</h3>
                    <p>Completed this introduction to Artificial Intelligence course from coursera online from the IBM university.</p>
                </div>
            </div>
            <div className='lets_talk'>
                <p>let's <br />talk</p>
                <Link to = '/' >
                    <CallMadeIcon fontSize="inherit" style={{fontSize:100}} className='lets_talk_backIcon' />
                </Link>
            </div>

        </div>
    )
}

export default Certification;

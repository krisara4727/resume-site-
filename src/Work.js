import React from 'react';
import './Work.css';
import data from './data.js';


function Work() {
    return (
        <div className='work'>
            <div className='work_header'>
                <div className='work_headerLeft'>
                    <div className='work_headerText'>
                        <h1>Hi! this is chivte krishna.</h1>
                        <p>This is glimpse of my works. Here are some of the videos of my work and projects.
                            You can go through it. </p>
                    </div>
                </div>
            </div>
            <div className='work_projectName'>
                <div className='work_tagline'>Project Images</div>
            </div>
            <div className='project_details'>
                
                {data.map( item => (
                    <div className='project_card'>
                    <img src={item.url} alt='images logo' />
                    <div className='project_cardInfo'>
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                    </div>
                </div>
                ))}
            </div>
        </div>
    )
}

export default Work

import React from 'react';
import instaLogo from './images/instagram.jpeg';
import { Button } from '@material-ui/core';
import './Instagram.css';
import dapper from './images/dapper.png';
//import {Link} from 'react-router-dom';

function Instagram() {
    return (
        <div className='social'>
            <div className='social_container'>
                <div className='social_image_container'>
                    <img src={instaLogo} alt='instagram logo'></img>
                    <img src={dapper} alt='account_holder'></img>
                    <h2>Follow me on Instagram</h2>

                </div>
                <div className='acc_info'>
                    <div className='social_button'>
                    <a href='https://www.instagram.com/dapper_kistu/'>
                        <Button variant="contained" color="primary" className='follow_button'>follow</Button>
                    </a>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Instagram;
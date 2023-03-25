import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import './Footer.css'




const Footer = () => {
    return (
        <div className='footer-area'>
            <div className="footer-top">
                <div className="footer-left">
                    <h2>BISHAL BHOWMIK</h2>
                    <p>A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product</p>
                </div>
                <div className="footer-right">
                    <h2>SOCIALlll</h2>
                    
                      <p><FontAwesomeIcon icon={faUser} /></p>
                      <p><FontAwesomeIcon icon={faUser} /></p>
                      <p><FontAwesomeIcon icon={faUser} /></p>
                      <p><FontAwesomeIcon icon={faUser} /></p>
                      <p><FontAwesomeIcon icon={faUser} /></p>


                </div>
            </div>
            <div className="footer-bottom">
                <hr />
                <p>© Copyright 2023. Made by BISHAL BHOWMIK</p>
            </div>

        </div>
    );
};

export default Footer;
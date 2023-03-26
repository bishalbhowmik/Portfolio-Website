import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Camera, GitHub, Instagram, Linkedin, Twitter, Youtube } from 'react-feather';
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
                    <span>
                        <h2>SOCIAL</h2>
                    </span>

                    <span id="icons">
                        <p><Camera /></p>
                        <p> <Linkedin /></p>
                        <p> <GitHub /></p>
                        <p> <Twitter /></p>
                        <p><Youtube /></p>
                        <p><Instagram /></p>
                    </span>
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
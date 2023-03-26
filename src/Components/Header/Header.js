import React from 'react';
import { Link } from 'react-router-dom';
import bishal from '../../img/bishal.jpg';
import './Header.css';

const Header = () => {
    return (
        <div>
            <section className='header-area'>
                <div className='header-left'>
                    <div>
                        <img src={bishal} className='w-14 h-14 rounded-full' alt="bishal" />
                    </div>
                    <div>
                        <h3>BISHAL BHOWMIK</h3>
                    </div>
                </div>
                <div className='header-right'>
                    <ul>
                        <li>
                            <Link className='link-btn'>Home</Link>
                            <Link className='link-btn'>About</Link>
                            <Link className='link-btn'>Project</Link>
                            <Link className='link-btn'>Contact</Link>
                        </li>
                    </ul>
                </div>
            </section>





        </div>


    );
};

export default Header;
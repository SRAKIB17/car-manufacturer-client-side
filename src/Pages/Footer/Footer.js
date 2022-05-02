import React from 'react';
import bg from '../../images/header-bg.png';
import './Footer.css'
import { Link } from 'react-router-dom';
import { ArrowRight, Discord, Facebook, Instagram, Linkedin, Pinterest, Twitter, Youtube } from 'react-bootstrap-icons';
const Footer = () => {
    return (
        <footer>

            <div className='footerSection'>

                <div>
                    <h2 className='quickLinkTitle'>Quick Link</h2>
                    <div className='quickLink'>
                        <div>

                            <ul>
                                <li><Link to='/contact-us'>Contact Us</Link></li>
                                <li><Link to='/contact-us'>About Us</Link></li>
                                <li><Link to='/contact-us'>Direction</Link></li>
                                <li><Link to='/contact-us'>Blog</Link></li>
                            </ul>
                        </div>
                        <ul>
                            <li><Link to='join'>Join Us</Link></li>
                            <li><Link to='join'>Recent Delivered</Link></li>
                        </ul>
                    </div>
                </div>
                <div className='socialLink'>
                    <div>
                        <ul>
                            <li><Link to=""><Facebook/></Link></li>
                            <li><Link to=""><Instagram/></Link></li>
                            <li><Link to=""><Linkedin/></Link></li>
                            <li><Link to=""><Twitter/></Link></li>
                            <li><Link to=""><Youtube/></Link></li>
                            <li><Link to=""><Pinterest/></Link></li>
                           
                        </ul>
                    </div>
                </div>
                
            </div>

        </footer>
    );
};

export default Footer;
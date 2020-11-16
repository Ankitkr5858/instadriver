import logo_svg from './img/logo.svg';
import menuImage from './img/menu.svg';
import React, { Component } from 'react';

class Csnav extends Component {
    render() {
        return (
            <div className="container-fluid csnav">
                <div className="top">
                    <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
                        <div className="container">
                            <a className="navbar-brand js-scroll-trigger" href="https://instadriver.co/">
                                <img src={logo_svg} style={{ height: 50 + 'px' }} />
                            </a>
                            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                                Menu <i className="fas fa-bars"></i>
                            </button>

                            <div className="collapse navbar-collapse" id="navbarResponsive">
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item custom-button">
                                        <div className="loginbxo cursorpointer" id="cursorpointer" href="https://instadriver.co/jobs&#39;" style={{ backgroundColor: 'white', color: '#3B3B3B', border: 2 + 'px solid #212529', fontWeight: 300 }}>Jobs</div>
                                    </li>
                                    <li className="nav-item" id="custom-button">
                                        <div className="loginbxo cursorpointer" id="cursorpointer" href="https://instadriver.co/social&#39;" style={{ backgroundColor: 'white', color: '#3B3B3B', border: 2 + 'px solid #212529', fontWeight: 300 }}>Get Social</div>
                                    </li>
                                    <li className="nav-item" id="custom-button">
                                        <div className="loginbxo cursorpointer default" id="cursorpointer" href="https://instadriver.co/login-user&#39;" style={{ backgroundColor: 'white', color: '#3B3B3B', border: 2 + 'px solid #212529', fontWeight: 300 }}> Sign in </div>
                                    </li>
                                    <li className="nav-item d-lg-none" style={{ listStyleType: 'none' }}>
                                        <ul className="menuList">
                                            <li> <a className="" href="https://instadriver.co/"> Home</a></li>
                                            <li> <a className="" href="https://instadriver.co/about_us">About InstaDriver</a></li>
                                            <li> <a className="" href="https://instadriver.co/verified_search">Verified Search (For Employers &amp; Drivers)</a></li>
                                            <li> <a className="" href="https://instadriver.co/top_ad_features">Top Ad Feature (For Drivers)</a></li>
                                            <li> <a className="" href="https://instadriver.co/faq">FAQs</a></li>
                                            <li> <a className="" href="https://instadriver.co/contact_us">Contact Us</a></li>
                                        </ul>
                                    </li>

                                    <li className="nav-item">
                                        <div className="dropdown mt-2 d-none d-sm-none d-lg-block">
                                            <button className="btn  dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Menu&nbsp;&nbsp;<img src={menuImage} alt="" />
                                            </button>
                                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                <a className="dropdown-item" href="https://instadriver.co/"> Home</a>
                                                <a className="dropdown-item" href="https://instadriver.co/about_us">About InstaDriver</a>
                                                <a className="dropdown-item" href="https://instadriver.co/verified_search">Verified Search (For Employers &amp; Drivers)</a>
                                                <a className="dropdown-item" href="https://instadriver.co/top_ad_features">Top Ad Feature (For Drivers)</a>
                                                <a className="dropdown-item" href="https://instadriver.co/faq">FAQs</a>
                                                <a className="dropdown-item" href="https://instadriver.co/contact_us">Contact Us</a>


                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        );
    }
}

export default Csnav;
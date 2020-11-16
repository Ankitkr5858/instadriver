import footerLogo from './img/footerlogo.svg';
import faceBook from "./img/facebook.svg"
import twitter from "./img/twitter.svg";
import youtube from "./img/youtube.svg";
import instagram from "./img/instagram.svg";

import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <section className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center"><img src={footerLogo} alt="" /></div>
                        <div className="col-md-3 col-sm-6 text-left spacing">
                            <h4 className="service-heading text-left">Useful links</h4>
                            <a className="links" href="https://instadriver.co/about_us">About InstaDriver<br /></a>
                            <a className="links" href="https://instadriver.co/verified_search">Verified Search (For Employers &amp; Drivers)<br /></a>
                            <a className="links" href="https://instadriver.co/top_ad_features">Top Ad Feature (For Drivers)</a>
                        </div>
                        <div className="col-md-2 col-sm-6 text-left spacing">
                            <h4 className="service-heading text-left">Useful links</h4>
                            <a className="links" href="https://instadriver.co/login">Driver Sign In<br /></a>
                            <a className="links" href="https://instadriver.co/register">Driver Sign Up</a>
                            <a className="links" href="https://instadriver.co/employer-login">Employer Sign in</a>
                            <a className="links" href="https://instadriver.co/register/employer">Employer Sign up</a>
                        </div>
                        <div className="col-md-2 col-sm-6 text-left spacing">
                            <h4 className="service-heading text-left">Useful links</h4>
                            <a className="links" href="https://instadriver.co/faq">FAQs<br /></a>
                            <a className="links" href="https://instadriver.co/contact_us">Contact Us<br /></a>
                            <a className="links" href="https://instadriver.co/terms_conditions">Terms &amp; Conditions</a>
                        </div>
                        <div className="col-md-3 col-sm-6 text-left spacing">
                            <h4 className="service-heading text-left">Social Media</h4>
                            <a className="links" href="https://instadriver.co/#">
                            </a>
                            <ul><a className="links" href="https://instadriver.co/#">
                            </a>
                                <li className="list-inline-item">
                                    <a className="links" href="https://instadriver.co/#"></a>
                                    <a href="https://www.facebook.com/instadrivers" target="_blank">
                                        <img src={faceBook} alt="" />
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="https://twitter.com/Instadriver1" target="_blank">
                                        <img src={twitter} alt="" />
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="https://www.youtube.com/channel/UCIyNdSi0KEi0mIGblffLkpg/featured?disable_polymer=1"
                                        target="_blank">
                                        <img src={youtube} alt="" />
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="https://www.instagram.com/instadriverx/" target="_blank">
                                        <img src={instagram} alt="" />
                                    </a>
                                </li>
                            </ul>
                            <br />
                        </div>
                        <div className="col-md-2 col-sm-6 text-left spacing">
                            <h4 className="service-heading text-left">Contact Info</h4>
                            <a className="links" href="mailto:saysomething@instadriver.co">saysomething@instadriver.co</a>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Footer;
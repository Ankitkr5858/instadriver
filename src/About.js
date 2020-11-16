import aboutImage from './img/aboutus.svg';
import verifyImage from './img/verify.svg';
import topAddImage from './img/topadd.svg';

import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <div className="about">
                <div className="container">
                    <div className="col-lg-12 text-center">
                        <div className="row text-center">
                            <div className="col-md-4">
                                <br /><br />
                                <a href="https://instadriver.co/about_us">
                                    <img src={aboutImage} alt="" />
                                    <h4 className="service-heading" href="https://instadriver.co/about_us">About us</h4>
                                </a>
                                <p className="text" style={{color:"#fff"}}>
                                    Learn how useful <br />Instadriver is to <br /> both the employer and drivers
                                </p>
                            </div>
                            <div className="col-md-4">
                                <br /><br />
                                <a href="https://instadriver.co/verified_search">
                                    <img src={verifyImage} alt="" />
                                    <h4 className="service-heading">Verified Search</h4>
                                </a>
                                <p className="text" style={{color:"#fff"}}>
                                    Learn how employers can <br />cut the curve and save <br /> a lot by using verified search</p>
                            </div>
                            <div className="col-md-4">
                                <br /><br />
                                <a href="https://instadriver.co/top_ad_features">
                                    <img src={topAddImage} alt="" />
                                    <h4 className="service-heading">Top Ad Feature</h4>
                                </a>
                                <p className="text" style={{color:"#fff"}}>
                                    See how top ad feature <br />can increase the odds<br /> of a driver getting hired</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About
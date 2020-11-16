import React, { Component } from 'react';

class Team extends Component {
    render() {
        return (
            <section className="bg-light country" id="team">
                <div className="container-fluid">
                    <div className="row text-center">
                        <div className="col-lg-12">
                            <h2 className="section-heading">Driver Profiles posted on Instadriver</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 text-center" style={{ padding: '8px 0px' }}>
                        <div className="d-flex justify-content-center">
                            <div className="col-sm-3 text-center">
                                <div className="box1">
                                    <h2 className="service-heading boxstyle1 mb-0">109</h2>
                                    <h4 className="service-heading boxtext1">Free Driver Profiles </h4>
                                </div>
                            </div>
                            <div className="col-sm-3 text-center">
                                <div className="box2">
                                    <h2 className="service-heading boxstyle2">7</h2>
                                    <h4 className="service-heading boxtext1">Verified Driver Profiles </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Team;
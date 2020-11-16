import React, { Component } from 'react';
import messageImage from './img/message.svg'

class Cstop extends Component {
    render() {
        return (
            <div className="container-fluid cs-top">
                <div className="row">
                    <div className="col-lg-12 blkstrip">
                        <div className="container">
                            <div className="fr">
                                <img src={messageImage} alt="message" /><a className="call" href="mailto:saysomething@instadriver.co">&nbsp; &nbsp;saysomething@instadriver.co</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Cstop;
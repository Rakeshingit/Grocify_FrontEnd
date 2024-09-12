import React from "react";
import GROCIFY from '../assets/GROCIFY.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFaceSmile } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-solid-svg-icons';




function Footer(){
    return (
        <div className="container Footer">
            <img src={GROCIFY} alt="Logo image" className="big_logo" />
            <h3>GROCIFY INC</h3>
            <div className="Footer_links">
                <a>About us</a>
                <a>Policies</a>
                <a>Privacy Policy</a>
                <a>Compliences</a>
                <a>Partners</a>
                <a>Offers</a>
                <a>About us</a>
                <a>Policies</a>
                <a>Privacy Policy</a>
                <a>Compliences</a>
                <a>Partners</a>
                <a>Offers</a>
                <a>About us</a>
                <a>Policies</a>
                <a>Privacy Policy</a>
                <a>Compliences</a>
                <a>Partners</a>
                <a>Offers</a>
                <a>About us</a>
                <a>Policies</a>
                <a>Privacy Policy</a>
                <a>Compliences</a>
                <a>Partners</a>
                <a>Offers</a>
            </div>
            <div className="sm">
                <button>
            <FontAwesomeIcon icon={faEnvelope} /> </button>
                <button>
            <FontAwesomeIcon icon={faFaceSmile} /> </button>
                
            </div>
        </div>
    )
}

export default Footer
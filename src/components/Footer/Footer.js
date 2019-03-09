import React, {useGlobal} from  'reactn';
import './Footer.css';
import {faTwitter, faFacebook} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {HashLink} from 'react-router-hash-link';

const Footer = () =>  {
    let bgColor = '#303841';
        return (
    <footer id="myFooter">
        <div className="container-fluid">
            <div className="row">
                <div className="col text-center footer-brand-container">
                    <h1 className="Silicon-Brand ml-3 mt-2"><div  className='text-primary'>Silicon Alchemists</div></h1>
                </div>
            </div>
        </div>
        <div className='footer-copyright' style={{'backgroundColor':bgColor}}>
            <p>© 2019 Copyright All rights reserved </p>
        </div>
    </footer>

        );
};

export default Footer;

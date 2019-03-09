import React from 'reactn';
import './Home.css';
import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faApple, faGooglePlay} from '@fortawesome/free-brands-svg-icons';
import { faShippingFast, faWallet, faTshirt, faMapMarker,faPhone, faEnvelope} from '@fortawesome/free-solid-svg-icons'
import Carousel from "react-bootstrap/Carousel";

class  Home extends React.Component{
    constructor(props) {
        super(props);
        this.state = {

        };
    }

  

    render(){
    return (
        <div>
            <section id="title" className='py-4 '>
                <Container>
                    <Row>
                        <Col >
                            <h1 className='section-title-light text-primary text-center pb-3'>Welcome Silicon Hospital</h1>
                        </Col>
                    </Row>







                </Container>
            </section>
        </div>
    );
    }
};

export default Home;
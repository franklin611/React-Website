import { Container } from "react-bootstrap";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/github-mark-white.png';
import navIcon3 from '../assets/img/email2.png';
import { Row, Col } from "react-bootstrap";
import logo from '../assets/img/logo2.png';
import ContactFormComponent from './ContactFormComponent';
import './css/ContactForm.css';  // Import the CSS file

export const ContactForm = () => {

    return (
        <footer className="ContactForm">
            <Container>
                <Row>
                    <Col sm={5} className="text-sm-start">
                        <div className="Contact-Me-Section">
                            <span>Contact Me</span>
                        </div>
                        <div className="my-icon">
                            <Row className='items'>
                                <Col sm={6} className="text-sm-start">
                                    <a href='https://www.linkedin.com/in/franklin-ramirez-48b229206/'><img src={navIcon1} /></a>
                                </Col>
                                <Col sm={6} className="text-sm-end description-column">
                                {/* <a className = 'centered-text' href='https://www.linkedin.com/in/franklin-ramirez-48b229206/'>linkedin.com/in/franklin611</a> */}
                                    <span className='centered-text'>LinkedIn</span>
                                </Col>
                            </Row>
                            <Row className='items'>
                                <Col sm={6} className="text-sm-start">
                                    <a href='https://github.com/franklin611'><img src={navIcon2} /></a>
                                </Col>
                                <Col sm={6} className="text-sm-end description-column">
                                    <span className='centered-text'>Github</span>
                                </Col>
                            </Row>
                            <Row className='items'>
                                <Col sm={6} className="text-sm-start">
                                    <a href='mailto:franklin.ramirez6111@gmail.com'><img src={navIcon3} /></a>
                                </Col>
                                <Col sm={6} className="text-sm-end description-column">
                                    <span className='centered-text'>Email</span>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col sm={7} className="text-center text-sm-end">
                        <ContactFormComponent />
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}
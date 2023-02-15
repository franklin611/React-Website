import { Container } from "react-bootstrap";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/github-mark-white.png';
import navIcon3 from '../assets/img/email2.png';
import { Row, Col } from "react-bootstrap";
import logo from '../assets/img/logo2.png';

export const Footer = () => {

    return (
        <footer className = "footer">
            <Container>
                <Row className = "align-items-center">
                    <Col sm = {6} className = "text-sm-start">
                        <img src = {logo} alt = "Logo"/>
                    </Col>
                    <Col sm = {6} className = "text-center text-sm-end">
                        <div className = "social-icon">
                            <a href='https://www.linkedin.com/in/franklin-ramirez-48b229206/'><img src = {navIcon1}/></a>
                            <a href='https://github.com/franklin611'><img src = {navIcon2}/></a>
                            <a href="mailto:fgramire@uwaterloo.ca"><img src = {navIcon3}/></a>
                        </div>
                        <p>Copyright © 2023 FR</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}
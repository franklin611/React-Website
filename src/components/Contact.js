import { Col, Container, Row } from "react-bootstrap";
import franklin from "../assets/img/franklin.jpg";

export const Contact = () => {
  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col sm={6} md={4}>
            <h2>About Me</h2>
          </Col>
          <Col sm={6} md={4}>
            <h3></h3>
          </Col>
        </Row>
        <Row className="more-about-me">
          <Col sm={6} md={8}>
            <h3>Hi there! I'm Franklin Ramirez, a first-year computer science student at the University of Waterloo. I got into coding in grade 10, where I started
              creating simple apps, animations, and games using Processing and Java. Outside of school, I taught myself Python and am now working on a Sudoku Solver
              that uses an algorithm I created. At university, I'm learning more about programming fundamentals and the proper techniques for designing and creating
              exceptional programs. I enjoy working on side-projects using React, JavaScript, and HTML/CSS, and experimenting with new technologies on my GitHub.</h3>
          </Col>
          <Col sm={6} md={4}>
            <div>
              <img className="myImage" src={franklin}></img>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
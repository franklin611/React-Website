import { Col, Container, Row } from "react-bootstrap";
import franklin from "../assets/img/franklinnew.jpg";
import './css/Contact.css';  // Import the CSS file



export const Contact = () => {

  // List of current activities
  const items = [
    { text: (<>WAT.ai Technical Project Manager - <a href="https://www.instagram.com/delaynomoreuw2024/" target="_blank" rel="noopener noreferrer">Delay No More</a></> )},
    { text: (<>CUSEC UWaterloo Head Delegate - <a href="" target="_blank" rel="noopener noreferrer">Learn More!</a></>)},
    { text: (<>UWaterloo BobaTime President - Check out our <a href="https://www.instagram.com/uwbobatime/" target="_blank" rel="noopener noreferrer">Instagram</a></>)},
    { text: "Early Undergraduate Research Assistant" }
  ];

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="more-about-me">
          <Col sm={6} md={4}>
            <div>
              <img className="myImage" src={franklin}></img>
            </div>
          </Col>
          <Col sm={6} md={8}>
            <h1>Hi there! 👋 </h1>
            <br></br>
            <p>My name is Franklin and I am an undergraduate at the University of Waterloo pursuing a degree in Computer Science, with a specialization in Artificial Intelligence and Minor in Psychology.</p>
            <p>When I am not in the library studying or tirelessly working on fun ideas (my favourite being a GUI Calculator), you can find me trying new BBT flavours and hosting BBT events through our schools's Bubble Tea Club.
              Although I am not the greatest at basketball, I always show up with heart and cheer when I play at intramurals with my friends (Beginner Bracket Winter '24 Winner woot!).</p>
            <p>Some of the initiatives I am currently part of include:</p>
            {/* Iterate over all the above items creating a bullet point list */}
            <ul>
              {items.map((item, index) => (
                <li key={index}>
                  {item.text}
                </li>
              ))}
            </ul>

          </Col>
        </Row>
      </Container>
    </section>
  )
}
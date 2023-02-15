import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import javascript from "../assets/img/javascript.png";
import java from "../assets/img/java.png";
import python from "../assets/img/python.png";
import html from "../assets/img/html.png";
import css from "../assets/img/css.png";
import c from "../assets/img/c.png";
import colorSharp from "../assets/img/wallpaper3.jpg";

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };


    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>
                                Technical Skills
                            </h2>
                            <p>Coding Languages I Have Worked With</p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item2">
                                    <img src={java} alt="Java" />
                                    <h5>Java</h5>
                                </div>

                                <div className="item">
                                    <img src={python} alt="Python" />
                                    <h5>Python</h5>
                                </div>

                                <div className="item">
                                    <img src={javascript} alt="JavaScript" />
                                    <h5>JavaScript</h5>
                                </div>

                                <div className="item">
                                    <img src={css} alt="CSS" />
                                    <h5>CSS</h5>
                                </div>

                                <div className="item">
                                    <img src={html} alt="HTML" />
                                    <h5>HTML</h5>
                                </div>

                                <div className="item">
                                    <img src={c} alt="C" />
                                    <h5>C</h5>
                                </div>

                            </Carousel>

                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp}></img>
        </section>
    )
}

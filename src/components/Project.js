import { Nav } from "react-bootstrap";
import { Col, Container, Tab, Row } from 'react-bootstrap';
import { ProjectCard } from "./ProjectCard";
import box from "../assets/img/boxbreaker.png";
import blackjack from "../assets/img/blackjack.png"
import toDoList from "../assets/img/ToDolist1.png";
import temperature from "../assets/img/TemperatureCalculator.png"
import calculator from "../assets/img/CalculatorGUI.jpg"
import ocean from "../assets/img/OceanVideoFinal.png"
import scrabble from "../assets/img/spaceScrabble.png"



export const Projects = () => {
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

    const projects1 = [
        {
            title: "Box Breaker Game",
            description: "A game similar to 'Brick Breaker' where the objective is to break the infinitely spawning boxes",
            link: "https://github.com/franklin611/Box-Breaker-Game",
            imgUrl: box,
        },
        {
            title: "Black Jack Card Game ",
            description: "Play a game of Black Jack against a computer program",
            link: "https://github.com/franklin611/BlackJack",
            imgUrl: blackjack,
        },
        {
            title: "To Do List GUI",
            description: "An interactive To Do List GUI where the user can add, edit, and sort tasks",
            link: "https://github.com/franklin611/ToDoList",
            imgUrl: toDoList,
        },
    ];

    const projects2 = [

        {
            title: "Temperature Conversion Calculator GUI",
            description: "A program where the user can input a value and the temperature scales they would like to convert to.",
            link: "https://github.com/franklin611/TemperatureConversionCalculator",
            imgUrl: temperature,
        },
        {
            title: "Calculator GUI",
            description: "A Calculator GUI I made in Java Netbeans that replicates the calculator found on IOS devices",
            link: "https://github.com/franklin611/CalculatorGUI",
            imgUrl: calculator,
        },
        {
            title: "Ocean Storybook Animation",
            description: "A short animation about a shark named Vinny",
            link: "https://github.com/franklin611/Storybook-Animation",
            imgUrl: ocean,
        },

    ];

    const projects3 = [
        {
            title: "Spaced Themed Word Scrabble",
            description: "A Spaced Themed Word Scrabble game coded in JavaScript",
            link: "https://github.com/franklin611/Space-Themed-Scrabble",
            imgUrl: scrabble,
        },
    ];

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>
                                Personal Projects
                            </h2>
                            <p>Different Projects I Have Worked on Throughout my Coding Journey</p>
                            <Tab.Container id="projects-tab" defaultActiveKey="first">
                                <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                    <Nav.Item>
                                        <Nav.Link eventKey="first">Tab One</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second">Tab Two</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="third">Tab Three</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                <Tab.Content>
                                    <Tab.Pane eventKey="first">
                                        <Row>
                                            {
                                                projects1.map((project1, index) => {
                                                    return (
                                                        <ProjectCard key={index} {...project1} />
                                                    )
                                                })
                                            }
                                        </Row>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                        <Row>
                                            {
                                                projects2.map((project1, index) => {
                                                    return (
                                                        <ProjectCard key={index} {...project1} />
                                                    )
                                                })
                                            }
                                        </Row>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="third">
                                        <Row>
                                            {
                                                projects3.map((project1, index) => {
                                                    return (
                                                        <ProjectCard key={index} {...project1} />
                                                    )
                                                })
                                            }
                                        </Row>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Tab.Container>

                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import './css/Project.css';
import borealis from "../assets/project-images/BorealisAI.gif";
import dermdetect from "../assets/project-images/dermdetect.png";
import statcan from "../assets/project-images/statcan.jpg";
import traveltrove from "../assets/project-images/traveltrove.png";
import routemaster from "../assets/project-images/RouteMaster.png";
import busbuddy from "../assets/project-images/busbuddy.png";

const projects = [
    {
        title: "Borealis AI LSI Stroke Calculator",
        description: "Created a classification tool to predict a user's risk of developing stroke disease based on the likelihood that someone similar to you had a stroke.",
        imageUrl: borealis,
        link: "https://github.com/chiaraalcantara/lsi-stroke-calculator",
    },
    {
        title: "Derm Detect",
        description: "A skin disease classification tool to predict the type of skin disease a patient has based on a single picture. Trained on over 15,000 images, with a 86% accuracy.",
        imageUrl: dermdetect,
        link: "https://github.com/z0CoolCS/vitality_squad",
    },
    {
        title: "StatCanDB",
        description: "Built a data extraction and transformation pipeline to extract 500GB+ of datasets from Statistics Canada, and then convert them to Parquet. Stored in DuckDB with R2 for efficient retrieval.",
        imageUrl: statcan,
        link: "https://github.com/khwilson/statcandb",
    },
    {
        title: "Travel Trove",
        description: "An app that plans your dream vacation for you based on your preferred destination description, budget, and food type.",
        imageUrl: traveltrove,
        link: "https://github.com/franklin611/TravelTroveUpdated",
    },
    {
        title: "UWRouteMaster",
        description: "A tool to simplify the course planning process by tailoring a 3-5 year UW undergraduate bachelors according to your major, minor(s), and specialization(s).",
        imageUrl: routemaster,
        link: "https://github.com/shashwatmurawala/RouteMaster",
    },
    {
        title: "Bus Buddy",
        description: "Bus Buddy is student safety system designed to be placed in school buses to ensure parents and guardians know the whereabouts of their child(ren), and students go on the correct bus.",
        imageUrl: busbuddy,
        link: "https://github.com/franklin611/BusBuddy",
    },
];

export const Projects = () => {
    return (
        <section className="project-section">
            <Container>
                <h1 className="project-title text-center mb-4">Check out some of my work ⚙️</h1>
                <br></br>
                <Row>
                    {projects.map((project, index) => (
                        <Col key={index} sm={12} md={12} lg={6} className="mb-5">
                            <Card className="project-card">
                                <Row className="no-gutters">
                                    <Col md={7}>
                                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                                            <Card.Img
                                                variant="top"
                                                src={project.imageUrl}
                                                className="h-100"
                                            />
                                        </a>
                                    </Col>
                                    <Col md={5}>
                                        <Card.Body>
                                            <Card.Title>{project.title}</Card.Title>
                                            <Card.Text>{project.description}</Card.Text>
                                        </Card.Body>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section >
    );
};


export default Projects;
import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, link, imgUrl }) => {
    return (
        <Col sm={6} md={4}>
            <div className="proj-imgbx">
                <img src={imgUrl} />
                <div className="proj-txtx">
                    <h4><a className="link" href={link} width={500} height={600} alt="Project">{title}</a></h4>
                    <span>{description}</span>
                    <br></br>
                </div>

            </div>
        </Col>
    )
}
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import menu from "../../Assets/Projects/menu.jpg";
import pic from "../../Assets/Projects/pic.png";
import chatbot from "../../Assets/Projects/chatbot.png";
import Capture from "../../Assets/Projects/Capture.PNG";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "black" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Capture}
              isBlog={false}
              title="Search-Engine"
              description="This project is a simple search engine built using Flask and PostgreSQL. It allows users to search for documents based on their titles."
              ghLink="https://github.com/wafaeiin/simple-search-engine-"
              /*demoLink=" "*/
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatbot}
              isBlog={false}
              title="Emergency-Carebot"
              description="Emergency CareBot is an advanced and specialized chatbot specifically crafted to handle urgent medical inquiries. Its purpose is to assist users in swiftly accessing crucial information related to emergency health situations."
              ghLink="https://github.com/wafaeiin/Emergency-CareBot"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={menu}
              isBlog={false}
              title="Tic-Tac-Toe"
              description="A simple Tic Tac Toe game using PyQt5. It includes features for playing against a friend or the computer at different difficulty levels (easy, medium, hard)."
              ghLink="https://github.com/wafaeiin/TICTACTOE-en-C-"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pic}
              isBlog={false}
              title="educational-website-for-children "
              description="A simple educational website targeting children and implemented using PHP for server-side scripting and HTML/CSS for the front-end design."
              ghLink="https://github.com/wafaeiin/Site-educatif-pour-enfants"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

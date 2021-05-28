import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import BlogCard from "./BlogsCards";
import Particle from "../Particle";

import Cartoonify from "../../Assets/Projects/Result.png";
import Schedule from "../../Assets/Projects/Schedule.png";
import editor from "../../Assets/logo.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Cartoonify}
              isBlog={false}
              title="Cartoonify"
              description="Coming Soon"
              link=" "
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Schedule}
              isBlog={false}
              title="Scheduler"
              description="Coming Soon"
              link=" "
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Space War"
              description="Coming Soon"
              link=" "
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

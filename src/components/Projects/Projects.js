import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import BlogCard from "./BlogsCards";
import Particle from "../Particle";

import Cartoonify from "../../Assets/Projects/Result.png";
import Schedule from "../../Assets/Projects/Schedule.png";
import editor from "../../Assets/Projects/roketship1.png";
import NeptuneLogo from "../../Assets/Projects/Neptunelogo.png";
import RF from "../../Assets/logo.png";
import Arduino from "../../Assets/Arduino.png";




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
              imgPath={NeptuneLogo}
              isBlog={false}
              title="Neptune Manager App"
              description="The app manages inventory, orders, revenue and more... Using: Django & React"
              link="https://github.com/RomaFom/Neptune"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Space War - In progress"
              description="Space-Ship War is a 2D mini game project, is implementing coding logics and techniques using: C# and WPF"
              link="https://github.com/RomaFom/SpaceWar"
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Arduino}
              isBlog={false}
              title="Arduino Solution"
              description="This code represents a solution for electrical problem, a company that had a electrostatic disorders. The alternative solution was build a metal box (faraday cage) around the electronics."
              link="https://github.com/RomaFom/RF-Disorders-Solution"
            />
          </Col>
  

           <Col md={4} className="project-card">
            <ProjectCard
              imgPath={RF}
              isBlog={false}
              title="My Portfolio"
              description="The portfolio you see now"
              link="https://github.com/RomaFom/ReactCvApp"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Cartoonify}
              isBlog={false}
              title="Cartoonify"
              description="Implementation of cv2 and other packages to convert a real photo to cartoon one"
              link="https://github.com/RomaFom/Cartoonify"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Schedule}
              isBlog={false}
              title="Scheduler"
              description="Built a simple web app using React and Node that allowed workers at workshop to check their schedule tasks"
              link="https://github.com/RomaFom/CleaningSchedule"
            />
          </Col>

          
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

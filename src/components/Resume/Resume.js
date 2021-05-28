import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import axios from "axios";
import pdf from "../../Assets/Roma-Fominih CV.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function Resume() {
  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row className="resume">
          <Col />
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="BSc Software Engineering"
              date="2019 - Present"
              content={[`GPA: 90`, "Graduate: July 2023"]}
            />
            <Resumecontent
              title="Relevant Courses"
              content={[
                "Data Structures & Algorithms",
                "C.S introduction",
                "Object Oriented Programming",
                "Assembly Programming",
                "Systems Programming introduction",
                "The complete 2021 web development bootcamp",
                "Complete python mastery",
              ]}
            />
          </Col>
          <Col />
        </Row>
        <Row md={4} style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;

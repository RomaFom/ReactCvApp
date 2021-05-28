import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Roman Fominih </span>
            from <span className="purple"> Ein Harod, Israel.</span>
            <br />I am a Software Engineering student.
            <br />
            <br />
            Apart from coding and studying, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Shooting Guns
            </li>
            <li className="about-activity">
              <ImPointRight /> Riding Motocross
            </li>
            <li className="about-activity">
              <ImPointRight /> Building and Welding
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <br/>
          <footer className="blockquote-footer">RomaFom</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
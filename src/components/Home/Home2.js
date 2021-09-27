import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I love programming and explore new methods, frameworks and
              technologies
              <br />
              <br />Two years ago my programming journey began. Beyond university studies i'm a self-learner. I work hard, days and nights to study new fields beyond academic studies
              <i>
                <b className="purple"> Full-Stack, Node, Django, React and more </b>
              </i>
              <br />
              <br />
              My field of Interest's are learning new &nbsp;
              <i>
                <b className="purple">Web Technologies and Frameworks </b> and
                also the{" "}
                <b className="purple">Data Structures and Algorithms.</b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              but not in code..
              <i>
                <b className="purple"> With metals</b>
              </i>
              &nbsp; build physical products. With my knowledge today also incorporating new technologies
              <i>
                <b className="purple"> Turning a motorcycle into an electric motorcycle</b>
              </i>
              &nbsp; another example is
              <i>
                <b className="purple"> Arduino based iron gates</b>
              </i>
              &nbsp; and
               <i>
                <b className="purple">Only code based solution for electrostatic disorders</b>
              </i>
              &nbsp; instead of faraday cage for electronic box

            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/RomaFom"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="http://linkedin.com/in/roma-fominih-0933a0209/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
             
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;

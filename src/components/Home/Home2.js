import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/my.svg";
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
              I fell in love with programming and have gained valuable experience over the years.
              <br />
              <br />I am fluent in languages like
              <i>
                <b className="purple"> PHP, JavaScript, Dart, and C#. </b>
              </i>
              <br />
              <br />
              My field of interest includes developing innovative &nbsp;
              <i>
                <b className="purple">Web and Mobile Applications</b> and
                also exploring areas related to{" "}
                <b className="purple">Server Management and Cloud Technologies.</b>
              </i>
              <br />
              <br />
              I have experience working with frameworks such as
              <i>
                <b className="purple"> Laravel, CodeIgniter, React, Flutter, and WordPress.</b>
              </i>
              <br />
              <br />
              Additionally, I have expertise in server management, including
              <b className="purple"> Linux, Ubuntu, and AWS.</b>
              <br />
              <br />
              With <b className="purple">4 years</b> of experience in the Software Engineering field, I am passionate about building scalable and efficient solutions while continuously learning and growing in the tech industry.
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
                  href="https://github.com/milindasanka"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/milindasanka"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/milinda-anuradha-sanka-619132131/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/milindasanka"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
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

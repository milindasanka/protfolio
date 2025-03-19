import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiDart,
  DiPhp,
} from "react-icons/di";
import {
    SiFirebase,
    SiCodeigniter,
    SiJquery,
    SiBootstrap,
    SiMysql,
    SiWordpress,
    SiLaravel,
    SiFlutter,

} from "react-icons/si";
import { TbBrandCSharp  } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiPhp />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiLaravel  />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFlutter  />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiDart  />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql  />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCodeigniter  />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJquery  />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TbBrandCSharp />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiWordpress  />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiBootstrap  />
      </Col>
    </Row>
  );
}

export default Techstack;

import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
    SiAndroidstudio,
    SiCpanel,
    SiLinux ,
    SiJira ,
    SiApache ,
    SiGit,
    SiDatagrip,
    SiIntellijidea,
} from "react-icons/si";
import { DiNginx } from "react-icons/di";
import { FaAws } from "react-icons/fa";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNginx />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiApache  />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaAws />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJira  />
      </Col>
        <Col xs={4} md={2} className="tech-icons">
        <SiLinux   />
      </Col>
        <Col xs={4} md={2} className="tech-icons">
        <SiCpanel    />
      </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiVisualstudiocode    />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiAndroidstudio     />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiPostman    />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiDatagrip     />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiIntellijidea      />
        </Col>
    </Row>
  );
}

export default Toolstack;

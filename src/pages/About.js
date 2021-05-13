import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import selfie from "../images/me.png"


console.log(selfie);

function About() {
  return (
    <div>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>About Me</h1>
          </Col>
        </Row>
        <Row>
        <Col size="sm-12 md-6 lg-4 xl-3">
        <img src={selfie} width="300" height="300" alt="image of me" />
        </Col>
          <Col size="sm-12 md-6 lg-7 xl-8">
            <h3>Technical Career</h3> 
              <p>
              My technical career has developed over the years while working in positions ranging from running a print shop for a Medical Component Manufacturer, to being a contributor to a complete redesign and overhaul of an E-commerce website. Most recently, I held the position of "Customer Technology Solutions Analyst". In this role, I worked very closely with our internal and offshore development teams. Working in Jira, I would create user stories and acceptance criteria. I would then also review and test updates before and after production deployments.  </p>
            <h3>Hobbies and Other Interests</h3> 
            <p>
              In my free time, I like to spend time outdoors with my family. Usually going hiking, or going to car shows in our vintage Volkswagen Beetle. 
            </p> 
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;

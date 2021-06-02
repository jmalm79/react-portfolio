import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import selfie from "../assets/me.png"
import farmbus from "../assets/farmbus.jpg"

function About() {
  return (
    <div>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
          </Col>
        </Row>
        <Row>
        <Col size="sm-12 md-6 lg-4 xl-3" align-items="center">
        <img src={selfie} width="300" height="300" alt=" selfie of me" className="selfie" />
        </Col>
          <Col size="sm-12 md-6 lg-7 xl-8">
            <h3>About Me</h3>
               <p>
               My technical career started around 2008 when I started working in a label/print shop for a Medical Device Components Manufacturer. This position is what motivated me to start exploring more technologies that I was interested in. Being a casual gamer, I started exploring more ways to push and modify my store bought PC. This eventually turned into then building my first (and several after) custom PC. In 2013 I started working as a Level 2 Technician in a call center. In this role, I helped execute several process enhancements in both the office and warehouse. In the office I designed a digital troubleshooting guide that replaced the outdated and often incorrect paper copies that the call center team had been using. In the warehouse, I designed and implemented a color coding structure for our PC system build process, this helped streamline and ultimately reduce build costs. In 2017, I moved from the call center to the Web Team as a Website Specialist. I joined the team in time to help finish preparing for the relaunch of their primary E-Commerce site. In late 2019, I received a promotion to Customer Technology Solutions Analyst. In this role, I helped document both internal and external user stories which helped guide the path for the relaunch of a second E-Commerce site. Working with our Developers is what sparked my interest in Web Development.</p>
               
            <h3>Hobbies and Other Interests</h3> 
            <p>
              In my free time, I like to be outdoors with my family, either hiking in State Parks on the North Shore or out cruising to a car show in our vintage Volkswagen Bus. 
            </p>
            <img src={farmbus} height="45%" alt="my VW Bus" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;

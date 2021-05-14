import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import selfie from "../assets/me.png"


console.log(selfie);

function About() {
  return (
    <div>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
          </Col>
        </Row>
        <Row>
        <Col size="sm-12 md-6 lg-4 xl-3">
        <img src={selfie} width="300" height="300" alt="image of me" />
        </Col>
          <Col size="sm-12 md-6 lg-7 xl-8">
            <h3>About Me</h3>
               <p>
               My technical career started in a warehouse around 2008 when I started running a label/print shop for a Medical Device Components Manufacturer. This position required me to step up and self teach new technologies and then train others with. As a casual gamer, I also started tinkering around with modifying my store bought PC, to then building my first (and several after) custom PC. In 2013 when I started as a Level 2 Technician working in a call center. In this role, I helped execute several process enhancements in both the office and warehouse. In the office I designed and implemented a digital troubleshooting guide that replaced the outdated and often incorrect paper copies that the team had been using. In the warehouse, I designed and implemented a color coding structure for our system build process, this helped streamline the and ultimately cut time and reduced costs. In 2017, I moved from the call center to the Web Team as a Website Specialist. I joined the team in time to help finish preparing for the relaunch of their primary E-Commerce site. In late 2019, I received a promotion to Customer Technology Solutions Analyst. In this role, I helped document both internal and external user stories which helped guide the path for the relaunch of a second E-Commerce site. Working with our Developers is what sparked my interest in Web Development and programming.

               Now, Here I am about to finish the UofM Coding Bootcamp, on my way to becomming a Full Stack Web Developer.         
              </p>
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

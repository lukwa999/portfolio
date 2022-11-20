import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/background-projects.jpg";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/mqtt.jpg";
import projImg4 from "../assets/img/ai.jpg";
import projImg5 from "../assets/img/nn.jpg";
import projImg6 from "../assets/img/rubik.jpg";

import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "JAVA Sort Alphabet",
      description: "Sort & Count Alphabet from A - Z",
      imgUrl: projImg1,
    },
    {
      title: "AI Fuzzy Logic",
      description: "Open & Close Curtain with Light",
      imgUrl: projImg2,
    },
    {
      title: "AI Neural Network",
      description: "Sort Type between Giant mud crab & Freshwater crab ",
      imgUrl: projImg5,
    },
    {
      title: "JESS",
      description: "Guessing Animals with Questions",
      imgUrl: projImg4,
    },
    {
      title: "IoT Node-red MQTT",
      description: "Tell Water Level By using ESP32",
      imgUrl: projImg3,
    },
    {
      title: "Final Project Rubik's Cube Solver",
      description: "Solve Rubik's Cube with Robotic Arm & RaspberryPi",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2><br/>
                
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

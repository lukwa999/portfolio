import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.png";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer" >
      <Container>
        <Row className="align-items-center">
        <p></p>
          <Col size={15} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={15} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.facebook.com/profile.php?id=100002546585117"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.instagram.com/lookwhaaaaaaaaaaaaaaaaaaaaaaa/?hl=en"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

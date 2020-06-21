import "./styles/Footer.scss"

import { Col, Container, Row } from "react-bootstrap"
import { FiMail, FiPhone } from "react-icons/fi"

import { Link } from "gatsby"
import Logo from "../images/logo/logo.inline.svg"
import React from "react"
import offices from "../data/offices.json"

function Footer() {
  return (
    <footer className="footer">
      <Container fluid>
        <Container>
          <Row className="">
            <Col className="footer__intro">
              <Logo className="footer__intro__logo" />
              <h1>
                <span>Harshem</span> Family Practice
              </h1>
            </Col>
          </Row>
          <Row xs={1} md={3}>
            <Col className="footer__info">
              <Row xs={1}>
                <Col>
                  <a href="mailto:info@harshemfamilypractice.com">
                    <FiMail />
                    &nbsp;&nbsp;info@harshemfamilypractice.com
                  </a>
                </Col>
                {offices.map((office, index) => {
                  return (
                    <Col key={`footer-office-${index}`}>
                      <h1>{office.office}</h1>
                      <p>
                        <FiPhone />
                        &nbsp;&nbsp;{office.phone}
                      </p>
                    </Col>
                  )
                })}
              </Row>
            </Col>
            <Col className="footer__links footer__links--first">
              <Row xs={1}>
                <Col>
                  <h2>Information</h2>
                </Col>
                <Col>
                  <Link className="footer__links__link" to="/providers">
                    Providers
                  </Link>
                </Col>
                <Col>
                  <Link className="footer__links__link" to="/offices">
                    Office Locations
                  </Link>
                </Col>
                <Col>
                  <Link className="footer__links__link" to="/services">
                    Services
                  </Link>
                </Col>
                <Col>
                  <Link className="footer__links__link" to="/insuranceplans">
                    Accepted Insurance Plans
                  </Link>
                </Col>
              </Row>
            </Col>
            <Col className="footer__links">
              <Row xs={1}>
                <Col>
                  <h2>Contact Us</h2>
                </Col>
                <Col>
                  <Link className="footer__links__link" to="/contact">
                    General Contact
                  </Link>
                </Col>
                <Col>
                  <Link className="footer__links__link" to="/appointment">
                    Appointment Request
                  </Link>
                </Col>
                <Col>
                  <Link className="footer__links__link" to="/registration">
                    New Patient Registration
                  </Link>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Container>
    </footer>
  )
}

export default Footer

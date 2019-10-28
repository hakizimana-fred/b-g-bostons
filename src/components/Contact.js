import React from "react"
import { Container, Row, Col } from "reactstrap"
import { FaEnvelope, FaPhone } from "react-icons/fa"
import Map from "../components/Map"
export const Contact = () => {
  return (
    <section className="py-5 contact">
      <Container>
        <h1 className="services py-3 text-center">Contact us</h1>
        <Row>
          <Col className="col-12 col-md-6 text-center my-3">
            <p>Have an enquiry?</p>

            <p className="text-muted">
              <span className="contact-icons">
                <FaPhone />
              </span>
            </p>

            <b>+1 623 935 5736</b>
            <br />
            <b>+1 602 376 0603</b>
            <p className="text-muted">
              <span className="contact-icons">
                <FaEnvelope />
              </span>
            </p>
            <b>bandgbostons@gmail.com</b>
            <p className="text-muted">Address</p>
            <address>AZ</address>
          </Col>
          <Col className="col-12  col-md-6 text-center my-3">
            <Map />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

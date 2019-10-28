import React from "react"
import { Container, Row, Col } from "reactstrap"
import { FaFacebook, FaWalking, FaDog, FaCommentAlt } from "react-icons/fa"

export const Services = () => {
  return (
    <section className="py-5 services">
      <Container>
        <h1 className="services py-3 text-center">Services</h1>
        <Row>
          <Col className="col-12 col-sm-6 col-lg-4 text-center my-3">
            <span className="services-icon p-2">
              <FaWalking />
            </span>
            <h6 class="text-uppercase font-weight-bold my-3">Dog Walking</h6>
            <div className="skills-underline"></div>
            <p className="w-75 mx-auto text-muted">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad,
              eveniet.
            </p>
          </Col>
          <Col className="col-12 col-sm-6 col-lg-4 text-center my-3">
            <span className="services-icon p-2">
              <FaDog />
            </span>
            <h6 class="text-uppercase font-weight-bold my-3">Dog Bathing</h6>
            <div className="skills-underline"></div>
            <p className="w-75 mx-auto text-muted">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad,
              eveniet.
            </p>
          </Col>
          <Col className="col-12 col-sm-6 col-lg-4 text-center my-3">
            <span className="services-icon p-2 ">
              <FaCommentAlt />
            </span>
            <h6 class="text-uppercase font-weight-bold my-3">Free support</h6>
            <div className="skills-underline"></div>
            <p className="w-75 mx-auto text-muted">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad,
              eveniet.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

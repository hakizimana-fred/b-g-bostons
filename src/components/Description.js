import React from "react"
import { Container, Row, Col } from "reactstrap"
import pet from "../images/girl.jpeg"
export const Description = () => {
  return (
    <section className="py-5 description">
      <Container>
        <Row className="mb-5 ">
          <Col className="col-12 col-desc col-md-6">
            <h1 className="font-weight-bold align-items-center mx-1">
              About B&G Bostons
            </h1>
            <p className="text-muted w-75 py-5">
              We're on a mission to improve the lives of pets by empowering the
              people who love them. By combining pet science and technology, our
              products help you care for your pet in ways not previously
              possible. Our top-rated wearables help every pet parent better
              understand their pet's needs, behaviors and well-being.
            </p>
          </Col>
          <Col className="col-back col-md-6">
            <img src={pet} className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

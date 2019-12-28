import React from "react"
import { Container, Row, Col } from "reactstrap"
import pet from "../images/1.jpg"
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
             B and G Bostons is about raising and selling quality
             Boston Terriers. We only have a few litters a year so 
             we can devote our time to each puppies indivividual needs.
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

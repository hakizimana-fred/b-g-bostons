import React from 'react'
import dog from '../images/guy.jpeg'
import { Container, Row, Col } from 'reactstrap'
export const SingleSection = () => {
  return (
    <section className='single py-5'>
      <Container>
        <Row className='mb-5'>
          <div className='col '>
            <h1 className='text-center text-white text-capitalize'>
              A whitsle tracker for every pet
            </h1>
          </div>

          <Row className='single-container'>
            <div className='col-sm-6 col-lg-6 text-center my-5'>
              <h1 className='text-center'>Explore</h1>
              <p className='w-75 para'>
                Track your pet’s location in real time, plus monitor health,
                fitness and more for total peace of mind. With a built-in light
                and extended battery life, Whistle GO Explore is the ultimate
                pet tracker. Protect your pet in the event of a natural
                disaster. Read our quick tips for keeping them safe during an
                emergency.{' '}
              </p>
            </div>
            <div className='col-sm-6 col-lg-6 text-center my-5'>
              <h1 className='text-center'>Explore</h1>
              <p className='w-75 para'>
                Track your pet’s location in real time, plus monitor health,
                fitness and more for total peace of mind. Protect your pet in
                the event of a natural disaster. Read our quick tips for keeping
                them safe during an emergency.
              </p>
            </div>
          </Row>
        </Row>
      </Container>
    </section>
  )
}

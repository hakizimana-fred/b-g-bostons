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
            KEY FEATURES OF THIS BREED
            </h1>
          </div>

          <Row className='single-container'>
            <div className='col-sm-6 col-lg-6 text-center my-5'>
              <h1 className='text-center'>NECK</h1>
              <p className='w-75 para'>
              The length of neck must display an image of balance to the total dog. It is slightly arched, carrying the head gracefully and setting neatly into the shoulders. The back is just short enough to square the body. The topline is level and the rump curves slightly to the set-on of the tail. The chest is deep with good width, ribs well sprung and carried well back to the loins. The body should appear short. The tail is set on low, short, fine and tapering, straight or screw and must not be carried above the horizontal. (Note: The preferred tail does not exceed in length more than one-quarter the distance from set-on to hock.) Disqualify – Docked tail. Body Faults – Gaily carried tail. Serious Body Faults – Roach back, sway back, slab-sided.

FOREQUARTERS
The shoulders are sloping and well laid back, which allows for the Boston Terrier’s stylish movement. The elbows stand neither in nor out. The forelegs are set moderately wide apart and on a line with the upper tip of the shoulder blades. The forelegs are straight in bone with short, strong pasterns. The dewclaws may be removed. The feet are small, round and compact, turned neither in nor out, with well arched toes and short nails. Faults – Legs lacking in substance; splay feet.



              </p>
            </div>
            <div className='col-sm-6 col-lg-6 text-center my-5'>
              <h1 className='text-center'>HEAD</h1>
              <p className='w-75 para'>
              The Boston Terrier is a lively, highly intelligent, smooth coated, short-headed, compactly built, short-tailed, well balanced dog, brindle, seal or black in color and evenly marked with white. The head is in proportion to the size of the dog and the expression indicates a high degree of intelligence.
The body is rather short and well knit, the limbs strong and neatly turned, the tail is short and no feature is so prominent that the dog appears badly proportioned. The dog conveys an impression of determination, strength and activity, with style of a high order; carriage easy and graceful.
              </p>
            </div>
          </Row>
        </Row>
      </Container>
    </section>
  )
}

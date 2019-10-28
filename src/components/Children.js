import React from "react"
import pet from "../images/a.jpg"
import dog from "../images/z.jpg"
import { Link } from "gatsby"

export const Children = () => {
  return (
    <section className="about section-padding" id="about">
      <div className="grid-container grid-container-medium2">
        <article className="about-container">
          <div className="about-img ">
            <img
              src={pet}
              className="about-img-item img-responsive"
              alt="about"
            />
          </div>
          <div className="section-title">
            <h3 className="section-title-name text-center">Track Location</h3>
            <h5 className="section-title-features">Get alerts</h5>
            <p className="section-title-text text-muted">
              Get notified by email, text, or app when your pet leaves a
              designated safe place–whether it’s with the dogwalker or a sneaky
              side-door escape. Quickly locate them with real-time GPS tracking
              using AT&T nationwide network and Google Maps.
            </p>
            <Link className="btn-learn btn btn-block" to="/blog">
              Learn more
            </Link>
          </div>
        </article>

        <article className="about-container">
          <div className="section-title">
            <h1 className="section-title-name">KEEP YOUR PET IN PEAK SHAPE</h1>
            <h5 className="section-title-features">Have your pet in shape</h5>
            <p className="section-title-text text-muted">
              Improve your pet’s life by setting realistic fitness goals based
              on breed, age and weight. Track calories burned, distance
              traveled, minutes active and more. Just be sure to stop and
              celebrate with achievement badges awarded for milestones!
            </p>
            <Link className="btn-learn btn btn-block" to="/blog">
              Learn more
            </Link>
          </div>

          <div className="about-img about-img-special img-responsive">
            <img src={dog} className="about-img-item" alt="about" />
          </div>
        </article>
      </div>
    </section>
  )
}

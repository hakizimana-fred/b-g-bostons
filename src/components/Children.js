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
          <iframe width="680" height="383" src="http://www.youtube.com/embed/iWR9gwxW-4k?rel=0" frameborder="0" allowfullscreen></iframe>
          </div>
          <div className="section-title">
            <h3 className="section-title-name text-center">MORE ABOUT THIS BREED</h3>
            <h5 className="section-title-features">Know your pets</h5>
            <p className="section-title-text text-muted">
            Boston Terriers are known for being very intelligent — sometimes too much so. Their lively, affectionate nature makes them extremely loveable, though their sometimes stubborn nature or spurts of hyperactivity can land them in hot water with their owners. Any angst about their behavior, however, soon melts when they look up at you with those huge, round eyes that seem to say "I love you."
            </p>
            <Link className="btn-learn btn btn-block" to="/blog">
              Learn more
            </Link>
          </div>
        </article>

        <article className="about-container">
          <div className="section-title">
            <h1 className="section-title-name">ABOUT BOSTON TERRIER</h1>
            <h5 className="section-title-features">Know your pets</h5>
            <p className="section-title-text text-muted">
            The Boston Terrier is a lively, highly intelligent, smooth coated, short-headed, compactly built, short-tailed, well balanced dog, brindle, seal or black in color and evenly marked with white. The head is in proportion to the size of the dog and the expression indicates a high degree of intelligence
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

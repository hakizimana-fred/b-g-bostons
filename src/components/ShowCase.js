import React from "react"
import { Link } from "gatsby"

export const ShowCase = () => {
  return (
    <header className="showcase">
      <div className="inner">
        <h1 className="title-heading text-white">
          Best B&G Bostons, Market Place
        </h1>
        <Link className="btn btn-danger" to="/blog">
          Read more
        </Link>
      </div>
    </header>
  )
}

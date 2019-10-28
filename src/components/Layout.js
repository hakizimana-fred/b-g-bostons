import React from "react"
import { Header } from "./Header"
import { Footer } from "./Footer"

export const Layout = props => {
  return (
    <React.Fragment>
      <div>
        <Header />
        {props.children}
      </div>
      <Footer />
    </React.Fragment>
  )
}

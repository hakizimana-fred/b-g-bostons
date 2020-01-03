import React from "react"
import { ShowCase } from "../components/ShowCase"
import { Description } from "../components/Description"
import { Children } from "../components/Children"
import { SingleSection } from "../components/SingleSection"
import { PetShowCase } from "../components/PetShowCase"
import { Layout } from "../components/Layout"
import "../styles/main.scss"

const IndexPage = () => {
  return (
    <React.Fragment>
      <Layout>
        <ShowCase />
        <Description />
        <Children />
        <SingleSection />
        <PetShowCase />
      </Layout>
    
    </React.Fragment>
  )
}

export default IndexPage

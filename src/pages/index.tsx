import * as React from "react"

import { Head } from "../components/head"
import Layout from "../components/layout"
import SEO from "../components/seo"

import MainMenu from "../components/main-menu"
// import { APITest } from "../components/api-test/api-test"

const IndexPage: React.FC = () => {

  return (
    <>
      <SEO title="Visceral Visuals digital art and design" />
      <Head title={"Visceral Visuals"} />
      <Layout>
        <MainMenu/>
      </Layout>      
    </>
  )
}

export default IndexPage

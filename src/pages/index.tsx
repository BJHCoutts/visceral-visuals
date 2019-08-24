import * as React from "react"

import styled from "styled-components"

import { ExpansionPanel } from "../components/mediumSelect/expansion-panel"
import { Head } from "../components/head"
import { Layout } from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  return (
    <AppContainer>
      <SEO title="Home" />
      <Head title={"Visceral Visuals Component Props"} />
      <Layout>
      <Content>
        <ExpansionPanel/>
      </Content>
      </Layout>      
    </AppContainer>
  )
}

const Content = styled.div`
grid-column: 2;
`

const AppContainer = styled.div`
 height: 100%;
`

export default IndexPage

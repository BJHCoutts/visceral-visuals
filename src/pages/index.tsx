import * as React from "react"

import styled from "styled-components"

import { ExpansionPanel } from "../components/mediumSelect/expansion-panel"
import { Head } from "../components/head"
import { Layout } from "../components/layout"
import SEO from "../components/seo"

import { MainMenu } from "../components/main-menu/main-menu"
import { APITest } from "../components/api-test/api-test"

const IndexPage = () => {
  return (
    <AppContainer>
      <SEO title="Visceral Visuals digital art design" />
      <Head title={"Visceral Visuals"} />
      <Layout>
      <Content>
        <APITest/>
        <MainMenu/>
      </Content>
      </Layout>      
    </AppContainer>
  )
}

const Content = styled.div`
grid-column: 2;
`

const AppContainer = styled.div`
  height: 100vh;
`

export default IndexPage

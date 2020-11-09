import React from "react"

import { Head } from "../components/head"
import { Layout } from "../components/layout"
import SEO from "../components/seo"

import { SectionContainer, SectionContent } from "../components/shared/containers"
import styled from "styled-components"
import { breakPoints } from "../components/shared/break-points"
// import { APITest } from "../components/api-test/api-test"

const IndexPage: React.FC = () => {

  return (
    <>
      <SEO title="Visceral Visuals art and design by Brian Coutts" />
      <Head title={"Visceral Visuals"} />
      <Layout>
        <SectionContainer>
          <SectionContent>
              <Intro>
                I am a ʕ•́ᴥ•̀ʔっ♡ WIP site
              </Intro>
          </SectionContent>
      </SectionContainer>
      </Layout>      
    </>
  )
}

const Intro = styled.span`
  font: 700 1rem/0rem var(--body-font);
  color: var(--text-colour);
  @media (min-width: ${breakPoints.tablet}){
    font-size:1.2rem;
  }
`

export default IndexPage
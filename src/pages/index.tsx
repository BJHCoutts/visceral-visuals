import React from "react"

import { Head } from "../components/head"
import { Layout } from "../components/layout"
import SEO from "../components/seo"

import { SectionContainer, SectionContent } from "../components/shared/containers"
import styled from "styled-components"
import { breakPoints } from "../components/shared/break-points"
import { BodyTextContainer, BodyTextP, ExternalLink, Header } from "../components/shared/type"
// import { APITest } from "../components/api-test/api-test"

const IndexPage: React.FC = () => {

  return (
    <>
      <SEO title="Visceral Visuals art and design by Brian Coutts" />
      <Head title={"Visceral Visuals"} />
      <Layout>
        <SectionContainer>
          <SectionContent>
              <WIPWarning>
                I am a ʕ•́ᴥ•̀ʔっ♡ WIP site
              </WIPWarning>
              <Header>Introduction and Bio</Header>
              <BodyTextContainer>
                <BodyTextP>
                  Hello!
                </BodyTextP>
                <BodyTextP>
                  My name is Brian Coutts and this is an ever-evolving playground site, meant for me to implement front-end web development curiosities of mine, and to act as a portfolio site to display my web development and design projects, as well as my artistic and illustrative endevours. If you are interested in reaching out to me please contact me at <ExternalLink href='mailto:bjhcoutts@gmail.com'>bjhcoutts@gmail.com</ExternalLink>.
                </BodyTextP>
              </BodyTextContainer>
          </SectionContent>
      </SectionContainer>
      </Layout>      
    </>
  )
}

const WIPWarning = styled.h2`
  font: 700 1rem/0rem var(--body-font);
  color: var(--text-colour);
  @media (min-width: ${breakPoints.tablet}){
    font-size:1.2rem;
  }
`

export default IndexPage
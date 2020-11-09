import React from "react"
import styled from "styled-components"

import { Head } from "../components/head"
import { Layout } from "../components/layout"
import SEO from "../components/seo"
import { breakPoints } from "../components/shared/break-points"
import { SectionContainer, SectionContent } from "../components/shared/containers"
import { SubHeader } from "../components/shared/type"
import { Websites } from "../components/websites/websites"

const WebsitesPage: React.FC = () => {

  return (
    <>
      <SEO title="Visceral Visuals web dev and design by Brian Coutts" />
      <Head title={"Visceral Visuals Websites"} />
      <Layout>
				<SectionContainer>
					<SectionContent>
						<MainMenuSubHeader id="images">Websites</MainMenuSubHeader>
						<Websites/>
					</SectionContent>
				</SectionContainer>
      </Layout>      
    </>
  )
}

const MainMenuSubHeader = styled(SubHeader)`
  padding-top: 2em;
  @media (min-width: ${breakPoints.tablet}){
    padding-top: 3em;
  }
`

export default WebsitesPage
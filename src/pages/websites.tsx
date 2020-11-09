import React from "react"
import styled from "styled-components"

import { Head } from "../components/head"
import { Layout } from "../components/layout"
import SEO from "../components/seo"
import { breakPoints } from "../components/shared/break-points"
import { SectionContainer, SectionContent } from "../components/shared/containers"
import { Header } from "../components/shared/type"
import { Websites } from "../components/websites/websites"

const WebsitesPage: React.FC = () => {

  return (
    <>
      <SEO title="Visceral Visuals web dev and design by Brian Coutts" />
      <Head title={"Visceral Visuals Websites"} />
      <Layout>
				<SectionContainer>
					<SectionContent>
						<Header>Websites</Header>
						<Websites/>
					</SectionContent>
				</SectionContainer>
      </Layout>      
    </>
  )
}

export default WebsitesPage
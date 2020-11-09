import React from "react"
import styled from 'styled-components'
import { CarouselContainer } from "../components/carousel/carousel-container"

import { Head } from "../components/head"
import { Layout } from "../components/layout"
import SEO from "../components/seo"
import { breakPoints } from "../components/shared/break-points"
import { SectionContainer, SectionContent } from "../components/shared/containers"
import { ExternalLink, Header, LinkButton, SubHeader } from "../components/shared/type"

const ImagesPage: React.FC = () => {

  return (
    <>
      <SEO title="Visceral Visuals art by Brian Coutts" />
      <Head title={"Visceral Visuals Images"} />
      <Layout>
				<SectionContainer>
					<SectionContent>
						<Header>Image Galleries</Header>
						<CarouselContainer />
            <SubHeader>PDF's for Download</SubHeader>
						<PrintPortfolioButtonLink href="https://drive.google.com/file/d/1E8tXw5MDEH0-iQohUQ8bHegcbAUuVuKe/view?usp=sharing">
							<LinkButton>
                Print Portfolio
							</LinkButton>
						</PrintPortfolioButtonLink>
					</SectionContent>
				</SectionContainer>
      </Layout>      
    </>
  )
}

const PrintPortfolioButtonLink = styled(ExternalLink)`
  display: inline-block;
  transition: font-size .3s ease-in;
  opacity:1;
  @media (min-width: ${breakPoints.tablet}){
  }
  &:hover {
    opacity:1;
  }
`

export default ImagesPage
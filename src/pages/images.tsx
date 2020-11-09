import React from "react"
import styled from 'styled-components'
import { CarouselContainer } from "../components/carousel/carousel-container"

import { Head } from "../components/head"
import { Layout } from "../components/layout"
import SEO from "../components/seo"
import { breakPoints } from "../components/shared/break-points"
import { SectionContainer, SectionContent } from "../components/shared/containers"
import { HeaderToggleButton } from "../components/shared/forms"
import { ExternalLink, Header } from "../components/shared/type"

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
						<PrintPortfolioButton href="https://drive.google.com/file/d/1E8tXw5MDEH0-iQohUQ8bHegcbAUuVuKe/view?usp=sharing">
							<HeaderToggleButton>
								Print Portfolio
							</HeaderToggleButton>
						</PrintPortfolioButton>
					</SectionContent>
				</SectionContainer>
      </Layout>      
    </>
  )
}

const PrintPortfolioButton = styled(ExternalLink)`
  display: inline-block;
  /* margin-bottom: 1.5em; */
  transition: font-size .3s ease-in;
  @media (min-width: ${breakPoints.tablet}){
    /* margin-bottom: 3em; */
  }
  &:hover {
  }
`

export default ImagesPage
import React from "react"
import styled from 'styled-components'
import { CarouselContainer } from "../components/carousel/carousel-container"

import { Head } from "../components/head"
import { Layout } from "../components/layout"
import SEO from "../components/seo"
import { breakPoints } from "../components/shared/break-points"
import { SectionContainer, SectionContent } from "../components/shared/containers"
import { HeaderToggleButton } from "../components/shared/forms"
import { ExternalLink, SubHeader } from "../components/shared/type"

const ImagesPage: React.FC = () => {

  return (
    <>
      <SEO title="Visceral Visuals art by Brian Coutts" />
      <Head title={"Visceral Visuals Images"} />
      <Layout>
				<SectionContainer>
					<SectionContent>
						<MainMenuSubHeader id="images">Image Galleries</MainMenuSubHeader>
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

const MainMenuSubHeader = styled(SubHeader)`
  padding-top: 2em;
  @media (min-width: ${breakPoints.tablet}){
    padding-top: 3em;
  }
`

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
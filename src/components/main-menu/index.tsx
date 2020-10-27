import React from "react";
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'

import { SectionContainer, SectionContent } from "../shared/containers";
import { Carousel } from "../shared/carousel/carousel";
import { SubHeader, ExternalLink, Header } from "../shared/type";
import { HeaderToggleButton } from "../shared/forms";
import { breakPoints } from "../shared/break-points";
import CarouselToggler from '../carousel-toggler/'
import WebSitesMenu from "../websites-menu";


export default (function MainMenu () {

	const { digitalImages, analogueImages } = useStaticQuery(
    graphql`
      query {
        digitalImages: allFile(filter: {
          relativeDirectory: {eq: "digital"}
          })
          {       
            edges {
              node {
                childImageSharp {
                  id
                  fluid {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }          
          }
        analogueImages: allFile(filter: {
          relativeDirectory: {eq: "analogue"}
          })
          {       
            edges {
              node {
                childImageSharp {
                  id
                  fluid {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }          
          }
      }
    `
  )

	return(
		<SectionContainer>
			<SectionContent>
				<SubHeader>
          <Intro>
            This site is lovingly WIP, showcasing the creations of Brian Coutts
          </Intro>
        </SubHeader>
				<nav>
					<NavList>
            <MenuItem>
              <Header id="images">Image Galleries</Header>
              <CarouselToggler />
              {/* <Carousel title="Digital" >
                {digitalImages.edges}
              </Carousel>
              <Carousel title="analogue">
                {analogueImages.edges}
              </Carousel> */}
              <PrintPortfolioButton href="https://drive.google.com/file/d/1E8tXw5MDEH0-iQohUQ8bHegcbAUuVuKe/view?usp=sharing"><HeaderToggleButton>Print Portfolio</HeaderToggleButton></PrintPortfolioButton>
              <br/>
              {/* <WebSitesMenu title="Websites" id="websites"/> */}
            </MenuItem>
					</NavList>
				</nav>
			</SectionContent>
		</SectionContainer>
	)
}) as React.FC

const Intro = styled.span`
  font: 700 1rem/0rem var(--body-font);
  color: black;
  @media (min-width: ${breakPoints.tablet}){
    font-size:1.2rem;
  }
`

const MenuItem = styled.li`
	font-size:2rem;
  margin-bottom: 1em;
  width: 100%;
`

const NavList = styled.ul`
  width: 100%;
`

const PrintPortfolioButton = styled(ExternalLink)`
  display: inline-block;
  margin-bottom: 1.5em;
  @media (min-width: ${breakPoints.tablet}){
    margin-bottom: 3em;
  }
`
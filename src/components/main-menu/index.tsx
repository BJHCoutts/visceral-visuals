import React from "react";
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'

import { SectionContainer, SectionContent } from "../shared/containers";
import { Carousel } from "../shared/carousel/carousel";
import { SubHeader, ExternalLink, Header } from "../shared/type";
import { HeaderToggleButton } from "../shared/forms";
import { breakPoints } from "../shared/break-points";
import WebSitesMenu from "../websitesMenu";


export default (function MainMenu () {

	const { etherealImages, tangibleImages } = useStaticQuery(
    graphql`
      query {
        etherealImages: allFile(filter: {
          relativeDirectory: {eq: "ethereal"}
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
        tangibleImages: allFile(filter: {
          relativeDirectory: {eq: "tangible"}
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
              <ImageNavBar>
                <ImageNavList>
                  <ImageNavItemDigital>
                    Digital
                  </ImageNavItemDigital>
                  <ImageNavItemTangible>
                    Tangible
                  </ImageNavItemTangible>
                </ImageNavList>
              </ImageNavBar>
              <Carousel title="Digital" >
                {etherealImages.edges}
              </Carousel>
              <Carousel title="Tangible">
                {tangibleImages.edges}
              </Carousel>
              <PrintPortfolioButton href="https://drive.google.com/open?id=1nm9GazWmS3uIUhDJiRlE5hBFS6OvJGhk"><HeaderToggleButton>Print Portfolio</HeaderToggleButton></PrintPortfolioButton>
              <br/>
              <WebSitesMenu title="Websites" id="websites"/>
            </MenuItem>
					</NavList>
				</nav>
			</SectionContent>
		</SectionContainer>
	)
}) as React.FC

const ImageNavBar = styled.nav`
  display: grid;
  grid-template-columns: var(--grid);
  border-bottom: 5px solid var(--white);
  width: 100%;
`

const ImageNavItemDigital = styled.li`
  color: var(--black);
  background-color: var(--white);
  font: 400 1.5rem/2rem var(--display-font);
  width:100%;
  text-align:center;
  `

const ImageNavItemTangible = styled.li`
  color: var(--white);
  background-color: var(--black);
  font: 400 1.5rem/2rem var(--display-font);
  width:100%;
  text-align:center;
  `

const ImageNavList = styled.ul`
  grid-column:2;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`

const Intro = styled.span`
  font: 700 1rem/0rem var(--body-font);
  color: black;
  @media (min-width: ${breakPoints.tablet}){
    font-size:1.2rem;
  }
`

const MenuItem = styled.li`
	font-size:2rem;
  margin-bottom: 1rem;
  width: 100%;
`

const NavList = styled.ul`
  width: 100%;
`

const PrintPortfolioButton = styled(ExternalLink)`
  display: inline-block;
  margin-bottom: 1.5rem;
  @media (min-width: ${breakPoints.tablet}){
    margin-bottom: 3rem;
  }
`
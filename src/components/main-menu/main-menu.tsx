import React from "react";
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'

import { SectionContainer, SectionContent } from "../shared/containers";
import { Carousel } from "../shared/carousel/carousel";
import { SubHeader, ExternalLink } from "../shared/type";
import { HeaderToggleButton } from "../shared/forms";
import { breakPoints } from "../shared/break-points";


export const MainMenu = () => {

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
		<SectionContainer style={{paddingTop: "0"}}>
			<SectionContent>
				<SubHeader>
          <Intro>
            This site is lovingly WIP, showcasing the creations of Brian Coutts
          </Intro>
        </SubHeader>
				<nav>
					<NavList>
            <MenuItem>
              <Carousel title="Ethereal">
                {etherealImages.edges}
              </Carousel>
              <Carousel title="Tangible">
                {tangibleImages.edges}
              </Carousel>
              <ExternalLink href="https://drive.google.com/open?id=1nm9GazWmS3uIUhDJiRlE5hBFS6OvJGhk"><HeaderToggleButton>Print Portfolio</HeaderToggleButton></ExternalLink>
            </MenuItem>
					</NavList>
				</nav>
			</SectionContent>
		</SectionContainer>
	)
}

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
`

const NavList = styled.ul`

`
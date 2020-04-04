import React from "react";
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'

import { SectionContainer, SectionContent } from "../shared/containers";
import { Carousel } from "../shared/carousel/carousel";
import { SubHeader } from "../shared/type";


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
		<SectionContainer>
			<SectionContent>
				<SubHeader style={{marginBottom: "1.5rem"}}>This site is lovingly WIP, showcasing the creations of Brian Coutts</SubHeader>
				<nav>
					<NavList>
            <MenuItem>
              <Carousel title="Ethereal">
                {etherealImages.edges}
              </Carousel>
              <Carousel title="Tangible">
                {tangibleImages.edges}
              </Carousel>
            </MenuItem>
					</NavList>
				</nav>
			</SectionContent>
		</SectionContainer>
	)
}

const MenuItem = styled.li`
	font-size:2rem;
	margin-bottom: 1rem;
`

const NavList = styled.ul`

`
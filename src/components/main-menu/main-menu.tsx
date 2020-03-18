import React from "react";
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'

import { SectionContainer, SectionContent } from "../shared/containers";
import { Carousel } from "../shared/carousel/carousel";
import { SubHeader } from "../shared/type";


export const MainMenu = () => {

	const { digitalImages } = useStaticQuery(
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
      }
    `
  )

	return(
		<SectionContainer>
			<SectionContent>
				<SubHeader>This site is currently a lovingly WIP</SubHeader>
				<nav>
					<NavList>
            <MenuItem>
              <Carousel title="Ethereal">
                {digitalImages.edges}
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
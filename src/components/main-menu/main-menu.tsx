import React from "react";
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import { SectionContainer, SectionContent } from "../shared/containers";
import { Carousel } from "../shared/carousel/carousel";


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
                fluid(maxWidth: 340, maxHeight: 220) {
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
				<h2>This site is currently a lovingly WIP</h2>
				<nav>
					<NavList>
						<Carousel title="Ethereal">
							{digitalImages.edges}
          	</Carousel>
					</NavList>
				</nav>
			</SectionContent>
		</SectionContainer>
	)
}

const Container = styled.div``

const MenuItem = styled.li`
	font-size:2rem;
	margin-bottom: 1rem;
`

const NavList = styled.ul`

`
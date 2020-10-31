import React, { useState } from 'react'
// import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'

import { Carousel } from './carousel'
import { CarouselToggler } from './carousel-toggler'

	
export enum gallery {
	digital = 'Digital',
	analogue = 'Analogue'
}

export const CarouselContainer: React.FC = () => {

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

	const [galleryToggle, setGalleryToggle] = useState(gallery.digital)

	let galleryTitle = 'Digital'
	let galleryChildren = digitalImages.edges

	const setDigital = () => {
		return setGalleryToggle(gallery.digital)
	}
	
	const setAnalogue = () => {
		return setGalleryToggle(gallery.analogue)
	}

	switch (galleryToggle) {
		case gallery.digital:
			galleryTitle = 'Digital'
			galleryChildren = digitalImages.edges
			break
		case gallery.analogue:
			galleryTitle ='Analogue'
			galleryChildren = analogueImages.edges
			break
	}

	return(
		<>
			<CarouselToggler 
				galleryTitle={ galleryToggle } 
				setDigital={ setDigital }
				setAnalogue={ setAnalogue }
			>
			</CarouselToggler>
			<Carousel title={ galleryToggle } >
				{galleryChildren}
			</Carousel>
		</>
	)
}
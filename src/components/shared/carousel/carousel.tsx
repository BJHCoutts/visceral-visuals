import React from 'react'
import styled, {keyframes} from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { SectionContainer, SectionContent } from '../containers'

interface Props {

}

export const Carousel: React.FC<Props> = (props) => {

	const data = useStaticQuery(graphql`
		query {
			allImageSharp {
				edges {
					node {
						id
						fluid(maxWidth: 200, maxHeight: 200) {
								...GatsbyImageSharpFluid_withWebp
						}
					}
				}
			}
		}
	`)

	return(
		<SectionContainer>
			<SectionContent>
				<h1> Carousel </h1>
				<CarouselContainer>
					<ButtonPrev>
						{"<"}
					</ButtonPrev>
					
					<TrackContainer>
						<Track>
						{data.allImageSharp.edges.map(edge => {
        			return (
								<Img fluid={edge.node.fluid} />
							)
						}
      			)}
						</Track>
					</TrackContainer>

					<ButtonNext>
						{">"}
					</ButtonNext>
				</CarouselContainer>


			</SectionContent>
		</SectionContainer>
	)
}

const ButtonNext = styled.button`
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	cursor: pointer;
	right: -40px;
`
const ButtonPrev = styled.button`
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	cursor: pointer;
	left: -40px;
`

const CarouselContainer = styled.div`
	position: relative;
	height: 600px;
	width: 80%;
	margin: 0 auto;
`

const Track = styled.ul`
	position: relative;
	height: 100%;
	transition: transform .5s ease-in;
`

const TrackContainer = styled.div`
	position: relative;
	height: 100%;
	overflow: hidden;
	margin-bottom:10px;
`
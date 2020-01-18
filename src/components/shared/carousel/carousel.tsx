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
				<CarouselContainer>
					<ButtonPrev>
						{"<"}
					</ButtonPrev>
					
					<TrackContainer>
						<Track>
						{data.allImageSharp.edges.map(edge => {
        			return (
								<Slide>
									<SlideImage fluid={edge.node.fluid} />
								</Slide>
							)
						}
      			)}
						</Track>
					</TrackContainer>

					<ButtonNext>
						{">"}
					</ButtonNext>

					<Nav>
					{data.allImageSharp.edges.map(edge => {
        			return (
								<NavIndicator/>
							)
						}
      			)}
					</Nav>

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
	color: var(--white);
	background-color: var(--black);
	border-radius: 50%;
	padding:10px;
	right: -40px;
	`
const ButtonPrev = styled.button`
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	cursor: pointer;
	color: var(--white);
	background-color: var(--black);
	border-radius: 50%;
	padding:10px;
	left: -40px;
	`

const CarouselContainer = styled.div`
	position: relative;
	height: 600px;
	width: 80%;
	margin: 0 auto;
`

const Nav = styled.div`
	display:flex;
	justify-content: center;
`

const NavIndicator = styled.button`
	border:0;
	border-radius: 50%;
	width: 15px; 
	height:15px;
	margin: 0 12px;
	background-color: rgba(0,0,0,0.3);
	cursor: pointer;
`

const Slide = styled.li`
	position: absolute;
	top: 0;
	bottom: 0;
	width: 100%;
`

const SlideImage = styled(Img)`
	width: 100%;
	height: 100%;
	object-fit: cover;
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
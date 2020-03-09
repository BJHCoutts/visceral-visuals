import React from 'react'
import styled, { css } from 'styled-components'
import Img from 'gatsby-image'
import { Header } from '../type'

interface IProps {
	title: string
	children: JSX.Element[]
}

interface IButton {
	onClick: Function
}

export const Carousel:React.FC<IProps> = (props) => {
	const [currentSlide, setCurrentSlide] = React.useState(0)
	const [open, setOpen] = React.useState(false)

	const activeSlide = props.children.map((slide, i) =>
		<CarouselSlide key={i} active={currentSlide === i}>
			<SlideImg key={i} fluid={slide.node.childImageSharp.fluid}/>
		</CarouselSlide>
	)

	return(
		<>
			<HeaderToggleButton onClick={()=>setOpen(!open)}>{props.title}</HeaderToggleButton>
			<ContainerMain open={open}>
			<ContainerTop>
				<CarouselWrapper>
					<CarouselSlides currentSlide={currentSlide}>
						{activeSlide}
					</CarouselSlides>
				</CarouselWrapper>
				<NavButtonContainer>
					<ButtonPrev onClick={() => {
						setCurrentSlide((currentSlide - 1 + activeSlide.length) % activeSlide.length);
					}}>Prev</ButtonPrev>

					<ButtonNext onClick={() => {
							setCurrentSlide((currentSlide + 1) % activeSlide.length)
					}}>Next</ButtonNext>
				</NavButtonContainer>
			</ContainerTop>

				<ThumbnailConatiner>
				{	props.children.map((thumbnail, i) =>
						<Thumbnail key={i} fluid={thumbnail.node.childImageSharp.fluid} active={currentSlide === i} imgStyle={{objectFit: "cover"}}
							// onClick={
							// 	(i) => {
							// 		setCurrentSlide(i)
							// 	}
							// }
						/>
				)}
				</ThumbnailConatiner>
			</ContainerMain>
			</>
	)
}

const ButtonNext = styled.button<IButton>``

const ButtonPrev = styled.button<IButton>``

interface ICarouselSlide {
	active?: boolean
}

const CarouselSlide = styled.div<ICarouselSlide>`
	flex: 0 0 auto;
	opacity: ${props => props.active? 1:0};
	transition: all 0.5s ease;
	width: 100%;
	margin: 0 auto;
`

interface ICarouselSlides {
	currentSlide: number
}

const CarouselSlides = styled.div<ICarouselSlides>`
	display: flex;
	${props =>
		props.currentSlide &&
		css`
			transform: translateX(-${props.currentSlide * 100}%);
		`
	}
	transition: all 0.5s ease;
`

const CarouselWrapper = styled.div`
	display: flex;
	width: 100%;
`

interface IContainerMain {
	open: boolean
}

const ContainerMain = styled.div<IContainerMain>`
	max-height: ${props => props.open? "800px": "0px"};
	width:300px;
	margin: 0 auto;
	overflow: ${props => props.open? "show": "hidden"};
	transition: all .9s ease-in-out;
`

const ContainerTop = styled.div`
	width:300px;
	margin: 0 auto;
`

const HeaderToggleButton = styled(Header)`
	cursor: pointer;
	display:inline;
`

const NavButtonContainer = styled.nav`
width: 100%;
	display: flex;
	justify-content: space-evenly;
	padding: 1rem;
`

const SlideImg = styled(Img)`
	height: 300px;
	width: 300px;
`

const ThumbnailConatiner = styled.div`
	display: flex;
`

interface IThumbnail {
	active?: boolean
}

const Thumbnail = styled(Img)<IThumbnail>`
	height: 100px;
	width: 100px;
	border: 3px solid ${props => props.active? "white": "hsla(0%, 0%, 0%, 0)"};
	cursor: pointer;
`
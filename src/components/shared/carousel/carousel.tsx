import React from 'react'
import styled, { css } from 'styled-components'
import Img from 'gatsby-image'
import { Header } from '../type'
import { Button } from '../forms'
import { Modal } from '../modal/modal'

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
	const [active, setActive] = React.useState(false)

	const toggleModal = (e:React.MouseEvent<HTMLDivElement, MouseEvent>):void => {
		setActive(!active)
	}

	const activeSlide = props.children.map((slide, i) =>
		<CarouselSlide key={i} active={currentSlide === i} >
			<SlideContainer onClick={toggleModal}>
				<SlideImg key={i} fluid={slide.node.childImageSharp.fluid} imgStyle={{	objectFit: "contain"}}/>
			</SlideContainer>
		</CarouselSlide>
	)
	
	return(
		<>
			<Modal active={active} toggleModal={toggleModal}>
				<ModalImg fluid={props.children[currentSlide].node.childImageSharp.fluid} />
			</Modal>
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
						}}>{"< Prev"}</ButtonPrev>

						<ButtonNext onClick={() => {
								setCurrentSlide((currentSlide + 1) % activeSlide.length)
						}}>{"Next >"}</ButtonNext>
					</NavButtonContainer>
				</ContainerTop>

				<ThumbnailConatiner>
					{props.children.map((thumbnail, i) =>
						<div key={i} onClick={()=>setCurrentSlide(i)}>
							<Thumbnail  key={i} fluid={thumbnail.node.childImageSharp.fluid} active={currentSlide === i} imgStyle={{objectFit: "cover"}}
							/>
						</div>
					)}
					{/* {	aref.current.imageRef.current.addEventListener("click", () => alert("hi"))} */}
				</ThumbnailConatiner>
			</ContainerMain>
		</>
	)
}

const ButtonNext = styled(Button)<IButton>``

const ButtonPrev = styled(Button)<IButton>``

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
	max-height: ${props => props.open? "700px": "0px"};
	overflow: ${props => props.open? "show": "hidden"};
	opacity: ${props => props.open? "1": "0"};
	width:300px;
	margin: 0 auto;
	transition: max-height .8s ease-in, opacity .8s ease-in;
`

const ContainerTop = styled.div`
	width:300px;
	margin: 0 auto;
`

const HeaderToggleButton = styled(Header)`
	cursor: pointer;
	display:inline;
	border: 2px solid var(--black);
	padding: 0 3px;
	&:hover{
		background-color: var(--black);
		color: var(--white);
		transition: all .2s ease-in;
	}
`

const ModalImg = styled(Img)`
	position:fixed;
	top: 50%;
	left:50%;
	height:500px;
	width:500px;
	transform: translate(25%,25%);
`

const NavButtonContainer = styled.nav`
width: 100%;
	display: flex;
	justify-content: space-evenly;
	padding: 1rem;
`

const SlideContainer = styled.div`
	height: fit-content;
	width: fit-content;
	cursor: pointer;
`

const SlideImg = styled(Img)`
	height: 300px;
	width: 300px;
`

const ThumbnailConatiner = styled.div`
	display: flex;
	flex-wrap: wrap;
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
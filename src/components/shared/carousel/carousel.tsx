import React from 'react'
import styled, { css } from 'styled-components'
import Img from 'gatsby-image'
import { Button, HeaderToggleButton } from '../forms'
import { Modal } from '../modal/modal'
import { breakPoints } from '../break-points'

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
			<SlideContainer onClick={toggleModal} onKeyDown={toggleModal}>
				<SlideImg key={i} fluid={slide.node.childImageSharp.fluid} imgStyle={{	objectFit: "contain"}}/>
			</SlideContainer>
		</CarouselSlide>
	)

	const smoothScroll = (id:string) => {
		document.getElementById(id)!.scrollIntoView({ behavior: "smooth"})
	}

	const handleHeaderClick = (id:string) => {
		setOpen(!open)
		smoothScroll(id)
	}

	const handleThumbnailClick = (i) => {
		setCurrentSlide(i)
		smoothScroll(props.title)
	}
	
	return(
		<>
			<Modal active={active} toggleModal={toggleModal}>
				<ModalImg fluid={props.children[currentSlide].node.childImageSharp.fluid} imgStyle={{objectFit:"contain"}}/>
			</Modal>
			<ResponsiveHeaderToggleButton onClick={()=>handleHeaderClick(props.title)} open={open} id={props.title}>{props.title}</ResponsiveHeaderToggleButton>
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
						<div key={i} onClick={()=>handleThumbnailClick(i)} onKeyDown={()=>setCurrentSlide(i)}>
							<Thumbnail  key={i} fluid={thumbnail.node.childImageSharp.fluid} active={currentSlide === i} imgStyle={{objectFit: "cover"}}
							/>
						</div>
					)}
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
	max-height: ${props => props.open? "4000px": "0px"};
	overflow: ${props => props.open? "show": "hidden"};
	opacity: ${props => props.open? "1": "0"};
	width:100%;
	margin: 15px auto 5px auto;
	transition: max-height .8s ease-in, opacity .8s ease-in;
	max-width: 100vw;
	@media (min-width: ${breakPoints.tablet}){
		margin: 35px auto 20px auto;
	}
`

const ContainerTop = styled.div`
	width:300px;
	margin: 0 auto;
`

const ModalImg = styled(Img)`
	height:500px;
	width:500px;
	max-height: 90vh;
	max-width: 90vw;
`

const NavButtonContainer = styled.nav`
	display: flex;
	justify-content: space-evenly;
	padding: 1rem;
`

interface IResponsiveHeaderToggleButton {
	open: boolean
}

const ResponsiveHeaderToggleButton = styled(HeaderToggleButton)<IResponsiveHeaderToggleButton>`
	background-color: ${props => props.open? "var(--black)" : "inherit"};
	color: ${props => props.open? "var(--white)" : "inherit"};
`

interface ISlideContainer {
	onKeyDown: any
}

const SlideContainer = styled.div<ISlideContainer>`
	height: fit-content;
	width: fit-content;
	cursor: pointer;
`

const SlideImg = styled(Img)`
	height: 300px;
	width: 300px;
	max-width: 80vw;
`

const ThumbnailConatiner = styled.div`
	display: flex;
	flex-wrap: wrap;
	margin-bottom: 50px;
	width: 100%;
`

interface IThumbnail {
	active?: boolean
}

const Thumbnail = styled(Img)<IThumbnail>`
	border: 3px solid ${props => props.active? "white": "hsla(0%, 0%, 0%, 0)"};
	cursor: pointer;
	height: 70px;
	width: 70px;
	@media (min-width: ${breakPoints.tablet}){
		height: 100px;
		width: 100px;
	}
`
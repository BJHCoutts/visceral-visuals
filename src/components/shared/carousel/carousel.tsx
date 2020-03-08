import React from 'react'
import styled, { css } from 'styled-components'
import { SectionContainer, SectionContent } from '../containers'

interface IProps {
	children: JSX.Element[]
}

interface IButton {
	onClick: Function
}

export const Carousel:React.FC<IProps> = (props) => {
	const [currentSlide, setCurrentSlide] = React.useState(0)

	const activeSlide = props.children.map((slide, i) =>
		<CarouselSlide key={i} active={currentSlide === i}>
			{slide}
		</CarouselSlide>
	)

	return(
		<SectionContainer>
			<SectionContent>
				<CarouselWrapper>
					<CarouselSlides currentSlide={currentSlide}>
						{activeSlide}
					</CarouselSlides>
				</CarouselWrapper>
				<ButtonPrev onClick={() => {
          setCurrentSlide((currentSlide - 1 + activeSlide.length) % activeSlide.length);
        }}>Prev</ButtonPrev>

				<ButtonNext onClick={() => {
						setCurrentSlide((currentSlide + 1) % activeSlide.length)
				}}>Next</ButtonNext>

			</SectionContent>
		</SectionContainer>
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
`
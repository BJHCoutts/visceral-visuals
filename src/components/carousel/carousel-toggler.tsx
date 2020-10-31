import React from 'react'
import styled from 'styled-components'

// import { gallery } from './carousel-container'

interface IProps {
	// setGalleryToggle: Function
	// gallery: {
	// 	digital: number
	// 	analogue: number
	// }
	setDigital: Function
	setAnalogue: Function
	galleryTitle: string
}
	
export const CarouselToggler:React.FC<IProps> = ({galleryTitle, setDigital, setAnalogue, children}) => {
	
	return(
		<ImageNavBar id="images">
			<ImageNavList>
				<ImageNavItemDigital 
					onClick = {setDigital}
					active = {galleryTitle}
				>
					Digital
				</ImageNavItemDigital>
				<ImageNavItemAnalogue 
					onClick = {setAnalogue}
					active = {galleryTitle}
				>
					Analogue
				</ImageNavItemAnalogue>
			</ImageNavList>
			{children}
		</ImageNavBar>
	)
}

const ImageNavItemDigital = styled.li`
	color: ${(props) => props.active === 'Digital' ? 'var(--black)' : 'var(--white)'};
	background-color: ${(props) => props.active === 'Digital' ? 'var(--white)' : 'var(--black)'};
	font: 400 1.5rem/2rem var(--display-font);
	width:100%;
	text-align:center;
	cursor: pointer;
`

const ImageNavItemAnalogue = styled.li`
	color: ${(props) => props.active === 'Analogue' ? 'var(--black)' : 'var(--white)'};
	background-color: ${(props) => props.active === 'Analogue' ? 'var(--white)' : 'var(--black)'};
	font: 400 1.5rem/2rem var(--display-font);
	width:100%;
	text-align:center;
	cursor: pointer;
`

const ImageNavBar = styled.nav`
  display: grid;
  grid-template-columns: var(--grid);
  border-bottom: 5px solid var(--white);
	width: 100%;
`



const ImageNavList = styled.ul`
  grid-column:2;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`
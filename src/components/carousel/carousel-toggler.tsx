import React, {useState} from 'react'
import styled from 'styled-components'

enum gallery {
	digital,
	analogue
}
	
export const CarouselToggler:React.FC = () => {
	

	const [galleryToggle, setGalleryToggle] = useState(gallery.analogue)


	return(
		<ImageNavBar>
			<ImageNavList>
				<ImageNavItemDigital 
					onClick = {() => setGalleryToggle(gallery.digital)}
					active = {galleryToggle}
				>
					Digital
				</ImageNavItemDigital>
				<ImageNavItemAnalogue 
					onClick = {() => setGalleryToggle(gallery.analogue)}
					active = {galleryToggle}
				>
					Analogue
				</ImageNavItemAnalogue>
			</ImageNavList>
		</ImageNavBar>
	)
}

const ImageNavItemDigital = styled.li`
	color: ${(props) => props.active === gallery.digital ? 'var(--black)' : 'var(--white)'};
	background-color: ${(props) => props.active === gallery.digital ? 'var(--white)' : 'var(--black)'};
	font: 400 1.5rem/2rem var(--display-font);
	width:100%;
	text-align:center;
	cursor: pointer;
`

const ImageNavItemAnalogue = styled.li`
	color: ${(props) => props.active === gallery.analogue ? 'var(--black)' : 'var(--white)'};
	background-color: ${(props) => props.active === gallery.analogue ? 'var(--white)' : 'var(--black)'};
	font: 400 1.5rem/2rem var(--display-font);
	width:100%;
	text-align:center;
`

const ImageNavBar = styled.nav`
  display: grid;
  grid-template-columns: var(--grid);
  border-bottom: 5px solid var(--white);
	width: 100%;
	margin-bottom: 3em;
`



const ImageNavList = styled.ul`
  grid-column:2;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`
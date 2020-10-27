import React from 'react'
import styled from 'styled-components'

export default (function CarouselToggler () {
	return(
		<ImageNavBar>
			<ImageNavList>
				<ImageNavItemDigital>
					Digital
				</ImageNavItemDigital>
				<ImageNavItemAnalogue>
					Analogue
				</ImageNavItemAnalogue>
			</ImageNavList>
		</ImageNavBar>
	)
}) as React.FC

const ImageNavBar = styled.nav`
  display: grid;
  grid-template-columns: var(--grid);
  border-bottom: 5px solid var(--white);
	width: 100%;
	margin-bottom: 3em;
`

const ImageNavItemDigital = styled.li`
  color: var(--black);
  background-color: var(--white);
  font: 400 1.5rem/2rem var(--display-font);
  width:100%;
  text-align:center;
  `

const ImageNavItemAnalogue = styled.li`
  color: var(--white);
  background-color: var(--black);
  font: 400 1.5rem/2rem var(--display-font);
  width:100%;
  text-align:center;
  `

const ImageNavList = styled.ul`
  grid-column:2;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`
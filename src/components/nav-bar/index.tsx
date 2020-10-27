import React from 'react'
import styled from 'styled-components'

export default (function () {
	return(
		<NavBar>
			<NavList>
				<NavItem onClick={() => scrollTo("images")}>Images</NavItem>
				<NavItem onClick={() => scrollTo("websites")}>Websites</NavItem>
			</NavList>
		</NavBar>
	)
}) as React.FC

const NavBar = styled.nav`
  background-color: var(--black);
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  display: grid;
  grid-template-columns: var(--grid);
  padding: 10px 0;
`

const NavItem = styled.li`
  color: var(--white);
  font: 400 1.5rem/2rem var(--display-font);
  cursor: pointer;
`

const NavList = styled.ul`
  grid-column:2;
  display: flex;
  justify-content: space-around;
`

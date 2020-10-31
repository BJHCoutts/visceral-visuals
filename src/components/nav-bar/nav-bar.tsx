import React from 'react'
import styled from 'styled-components'

export const NavBar:React.FC = () => {

  const scrollTo = (id:string) => {
    const el = document.getElementById(id)
      el? el.scrollIntoView({behavior: "smooth"})
      :null
  }

	return(
		<NavBarContainer>
			<NavList>
        <NavItem 
          onClick={() => scrollTo("images")}
        >Images</NavItem>
        <NavItem 
          onClick={() => scrollTo("websites")}
        >Websites (wip)</NavItem>
			</NavList>
		</NavBarContainer>
	)
}

const NavBarContainer = styled.nav`
  background-color: var(--black);
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  display: grid;
  grid-template-columns: var(--grid);
  padding: 10px 0;
  z-index:1;
`

const NavItem = styled.li`
  color: var(--white);
  font: 400 1.5rem/2rem var(--display-font);
  cursor: pointer;
  text-transform: lowercase;
`

const NavList = styled.ul`
  grid-column:2;
  display: flex;
  justify-content: space-around;
`

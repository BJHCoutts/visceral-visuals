import React from "react";
import styled from 'styled-components'
import { SectionContainer, SectionContent } from "../shared/containers";

export const MainMenu = () => {
	return(
		<SectionContainer>
			<SectionContent>
				<h2>This site is currently a lovingly WIP</h2>
				<nav>
					<NavList>
						<MenuItem>Ethereal</MenuItem>
						<MenuItem>Tangible</MenuItem>
						<MenuItem>Design</MenuItem>
					</NavList>
				</nav>
			</SectionContent>
		</SectionContainer>
	)
}

const Container = styled.div``

const MenuItem = styled.li`
	font-size:2rem;
	margin-bottom: 1rem;
`

const NavList = styled.ul`

`
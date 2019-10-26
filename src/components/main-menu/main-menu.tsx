import React from "react";
import styled from 'styled-components'

export const MainMenu = () => {
	return(
		<Container>
		<MenuItem>Ethereal</MenuItem>
		<MenuItem>Tangible</MenuItem>
		<MenuItem>Design</MenuItem>
		</Container>
	)
}

const Container = styled.div``

const MenuItem = styled.h2`
font-size:2rem;
margin-bottom: 1rem;
`
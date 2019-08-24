import * as React from 'react'
import styled from 'styled-components'

export const ExpansionPanel = () => {
	return(
		<MediumContainer>
			<ImagePanel />
		</MediumContainer>
	)
}

const MediumContainer = styled.div`
	background-color: rgba(0,0,0,.7);
	padding: 25px;
	width: fit-content;
`

const ImagePanel = styled.div`
	background-color: white;
	height: 100px;
	width: 100px;
`
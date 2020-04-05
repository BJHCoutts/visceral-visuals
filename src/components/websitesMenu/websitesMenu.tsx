import React from 'react'
import styled from 'styled-components'
import { HeaderToggleButton } from '../shared/forms'

interface IProps {
	title: string
}

export const WebSitesMenu:React.FC<IProps> = (props) => {
	return(
		<HeaderToggleButton>
			{props.title}
		</HeaderToggleButton>
	)
}
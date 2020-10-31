import React from 'react'
import styled from 'styled-components'
import { HeaderToggleButton } from '../shared/forms'
import { WebsiteCard } from './website-card'

interface IProps {
	id: string
}

export const Websites:React.FC<IProps> = () => {

	const [open, setOpen] = React.useState(true)

	const handleHeaderClick = () => {
		setOpen(!open)
	}

	return(
		<>
			<ResponsiveHeaderToggleButton 
				onClick={()=>handleHeaderClick()} 
				open={open} 
				id='websites'
			>
			{open ? 'hide websites' : 'view websites'}
			</ResponsiveHeaderToggleButton>
				<WebsiteList>
					<WebsiteCard title="The Website" imagePath={''}>
						Website description Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, illo.
					</WebsiteCard>
				</WebsiteList>
			</>
	)
}

interface IResponsiveHeaderToggleButton {
	open: boolean
}

const ResponsiveHeaderToggleButton = styled(HeaderToggleButton)<IResponsiveHeaderToggleButton>`
	background-color: ${props => props.open? "var(--black)" : "inherit"};
	color: ${props => props.open? "var(--white)" : "inherit"};
	width: 100%;
	text-align: center;
`

const WebsiteList = styled.ul`

`
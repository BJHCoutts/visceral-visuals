import React from 'react'
import styled from 'styled-components'

import { HeaderToggleButton } from '../shared/forms'
import { WebsiteCard } from './website-card'

import { SubHeader } from '../shared/type'

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
			{/* <ResponsiveHeaderToggleButton 
				onClick={()=>handleHeaderClick()} 
				open={open} 
				id='websites'
			>
			{open ? 'hide websites' : 'view websites'}
			</ResponsiveHeaderToggleButton> */}
				<SubHeader>Websites</SubHeader>
				<WebsiteList>
					<WebsiteCard title="Who Studio" imagePath={''} url={'https://whostudio.com/'}>
						Website description Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, illo.
					</WebsiteCard>
					<WebsiteCard title="Dunbar Masonry" imagePath={''} url={'https://dunbarmasonry.ca/'}>
						Website description Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, illo.
					</WebsiteCard>
					<WebsiteCard title="Claire Rushton Counselling" imagePath={''} url={'https://clairerushtoncounselling.com/'}>
						Website description Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, illo.
					</WebsiteCard>
					<WebsiteCard title="Better Basics" imagePath={''} url={'https://www.betterbasics.co/'}>
						Website description Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, illo.
					</WebsiteCard>
					<WebsiteCard title="Masonry Awards" imagePath={''} url={'https://masonryawards.ca/'}>
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
import React from 'react'
import styled from 'styled-components'

import { WebsiteCard } from './website-card'
import { websiteList, IWebsite } from './website-list'

interface IProps {
}

export const Websites:React.FC<IProps> = () => {

	const websites = websiteList.map( ({name, imagePath, url, description}:IWebsite) => (
		<WebsiteCard name={name} imagePath={imagePath} url={url} key={name}>
			{description}
		</WebsiteCard>
	))

	return(
		<WebsiteList>
			{websites}
		</WebsiteList>
	)
}

const WebsiteList = styled.ul`

`
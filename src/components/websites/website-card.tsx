import React from 'react'
import styled from 'styled-components'
import { breakPoints } from '../shared/break-points'
import { ExternalLink } from '../shared/type'

interface IWebsiteCard {
	title: string
	imagePath: string
	url: string
}

export const WebsiteCard:React.FC<IWebsiteCard> = ({imagePath, title, url, children}) => {
	return(
		<CardContainer>
			<CardImage src={imagePath}/>
			<CardBody>
				<CardTitle><ExternalLink href={url}>{title}</ExternalLink></CardTitle>
				{/* <HR /> */}
				<BodyText>
				{children}
				</BodyText>
			</CardBody>
		</CardContainer>
	)
}

const BodyText = styled.p`
	margin-top: 0;
`

const CardBody = styled.div`

`

const CardContainer = styled.li`
  background-color: var(--black);
  border-radius: 5px;
  box-shadow: var(-shadow);
  padding: 32px;
  color: var(--white);
  margin-bottom: 32px;
	@media only screen and (min-width: ${breakPoints.tablet}) {
    display: flex;
    flex-flow: row nowrap;
		margin-bottom: 64px;
	}
`

interface ICardImage {
	src:string
}

const CardImage = styled.img<ICardImage>`
`

const CardTitle = styled.h3`
	font: 400 1.6rem/120% var(--body-font);
	margin-bottom: .6em;
`

const HR = styled.hr`
	border: solid 1.5px var(--red);
  color: var(--red);
	margin: 32px 16px 16px 16px;
	@media only screen and (min-width: ${breakPoints}) {
		margin: 16px;
	}
`
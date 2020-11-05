import React from 'react'
import styled from 'styled-components'
import { breakPoints } from '../shared/break-points'
import { ExternalLink } from '../shared/type'

interface IWebsiteCard {
	name: string
	imagePath: string
	url: string
}

export const WebsiteCard:React.FC<IWebsiteCard> = ({imagePath,name, url, children}) => {
	return(
		<CardContainer>
			<CardImage src={imagePath}/>
			<CardBody>
				<CardName><ExternalLink href={url}>{name}</ExternalLink></CardName>
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
	opacity: .8;
	box-shadow: var(--shadow);
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

const CardName = styled.h3`
	color:var(--pink);
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
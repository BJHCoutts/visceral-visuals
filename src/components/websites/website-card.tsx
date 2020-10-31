import React from 'react'
import styled from 'styled-components'
import { breakPoints } from '../shared/break-points'

interface IWebsiteCard {
	title: string
	imagePath: string
}

export const WebsiteCard:React.FC<IWebsiteCard> = ({imagePath, title, children}) => {
	return(
		<CardContainer>
			<CardImage src={imagePath}/>
			<HR />
			<CardTitle>{title}</CardTitle>
			<BodyText>
			{children}
			</BodyText>
		</CardContainer>
	)
}

const BodyText = styled.p`

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

`

const HR = styled.hr`
	border: solid 1.5px var(--red);
  color: var(--red);
	margin: 32px 16px 16px 16px;
	@media only screen and (min-width: ${breakPoints}) {
		margin: 16px;
	}
`
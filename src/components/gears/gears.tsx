import React from 'react'
import styled from 'styled-components'
import cog from '../../images/cog.png'
import { Context } from '../context/context'

export const Gears:React.FC = () => {
	return(
		<Context.Consumer>
			{ context => (
				<Container>
					<Cog src={cog} id='cog' rotation={context}/>
					<Cog src={cog} id='cog' rotation={context}/>
				</Container>
			)}
		</Context.Consumer>		
	)
}

interface ICog {
	rotation: number
}

const Cog = styled.img<ICog>`
	transform: rotate(-${props => props.rotation/16}deg);
	:last-child {
		grid-column:3;
		transform: rotate(${props => props.rotation/16}deg);
	}
	`

const Container = styled.div`
	display: grid;
	position: fixed;
	left: 0;
	top: 0;
	right: 0;
	grid-template-columns: var(--grid);
	pointer-events:none;
`
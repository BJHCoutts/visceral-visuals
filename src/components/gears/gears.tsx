import React from 'react'
import styled, { keyframes } from 'styled-components'
import cog from '../../icons/cog.png'
import cogDarkMode from '../../icons/cogDarkMode.png'
import { Context } from '../context/context'

interface IProps {
	theme: string
}

export const Gears:React.FC<IProps> = ({theme}) => {
	return(
		<Context.Consumer>
			{ context => (
				<Container>
					{theme === 'light' && <Cog src={cog} id='cog' rotation={context}/>}
					{theme === 'light' && <Cog src={cog} id='cog' rotation={context}/>}
					{theme ==='dark' && <Cog src={cogDarkMode} id='cog' rotation={context}/>}
					{theme ==='dark' && <Cog src={cogDarkMode} id='cog' rotation={context}/>}
				</Container>
			)}
		</Context.Consumer>		
	)
}

	const fadeIn = keyframes`
		0%{
			opacity: 0;
		}
		100%{
			opacity: 1;
		}
	`

interface ICog {
	rotation: number
}

const Cog = styled.img<ICog>`
	transform: rotate(-${props => props.rotation/16}deg);
	animation: ${fadeIn} 1s ease-in;
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
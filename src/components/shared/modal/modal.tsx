import React from 'react'
import styled from 'styled-components'

interface IProps {
	children: JSX.Element | JSX.Element[]
	active: boolean
	toggleModal: Function
}

export const Modal:React.FC<IProps> = (props) => {


	return(
		<>
			{props.active &&
				<>
				<Dimmer onClick={props.toggleModal} active={props.active} onScroll={e => e.stopPropagation()}>
					<Content onClick={e => e.stopPropagation()}>
						{props.children}
					</Content>
				</Dimmer>
				</>
			}
		</>
	)
}

const Content = styled.div`
	height: fit-content;
	width: fit-content;
	cursor: initial;
	position: fixed;
  top: 50%;
  left: 50%;
	transform: translate(-50%, -50%);
`

interface IDimmer {
	onClick: Function
	active: boolean
}

const Dimmer = styled.div<IDimmer>`
	position:fixed;
	top:0;
	left:0;
	height: 100%;
	width:100%;
	background-color: hsla(0,0%,0%,.5);
	z-index:5;
	cursor: pointer;
	transition: all 5s ease-in;
	opacity: ${props => props.active? 1: 0};
`
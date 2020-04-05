import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

interface IProps {
	children: JSX.Element | JSX.Element[]
	active: boolean
	toggleModal: Function
}

export const Modal:React.FC<IProps> = (props) => {


	return(
		<>
			{props.active && ReactDOM.createPortal(
				<Dimmer onClick={props.toggleModal} active={props.active}>
					<Content 
						// onClick={e => e.stopPropagation()}
					>
						{props.children}
					</Content>
				</Dimmer>
			,document.body)}
		</>
	)
}

const Content = styled.div`
	height: fit-content;
	width: fit-content;
	cursor: initial;
	position: absolute;
  top: 50%;
  left: 50%;
	transform: translate(-50%, -50%);
	z-index:5000;
`

interface IDimmer {
	onClick: Function
	active: boolean
}

const Dimmer = styled.div<IDimmer>`
	position:fixed;
	top:0;
	right:0;
	bottom:0;
	left:0;
	background-color: hsla(0,0%,0%,.5);
	z-index:5;
	cursor: pointer;
	transition: all 5s ease-in;
	opacity: ${props => props.active? 1: 0};
`
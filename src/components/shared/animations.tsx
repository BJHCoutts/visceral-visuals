import styled, {css, keyframes } from 'styled-components'

export const fadeIn = keyframes`
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
`

export const slideInTop = keyframes`
	0% {
		top: -100%;
	}
	100% {
		top: 0;
	}
`

export const slideInRight = keyframes`
	0% {
		right: -100%;
	}
	100% {
		right: 0;
	}
`
export const slideInBottom = keyframes`
	0% {
		bottom: -100%;
	}
	100% {
		bottom: 0;
	}
`
export const slideInLeft = keyframes`
	0% {
		left: -100%;
	}
	100% {
		left: 0;
	}
`
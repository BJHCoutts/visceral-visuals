import styled from "styled-components"

export const Input = styled.input`
	width: 100%;
	border-radius: 4px;
	background-color: #EAEAEA;
	border: solid 1px #999;
	padding: 5px 3px;
	font-family: var(--body-font);
`

export const LabelContainer = styled.label`
	margin-bottom: 1rem;
	display: block;
`

export const LabelText = styled.div`
	margin-bottom:.15rem;
	color: var(--primary);
	font-weight: 600;
`

export const TextArea = styled.textarea`
	width: 100%;
	border-radius: 4px;
	background-color: #EAEAEA;
	border: solid 1px #999;
	padding: 5px 3px;
	min-height: 5rem;
	font-family: var(--body-font);
`

export const Button = styled.button`
	color: var(--black);
	padding: 2px 5px;
	font-family: var(--display-font);
	font-size: 1.2rem;
	background-color: none;
	border-radius: 6px;
	font-weight: bold;
	border: solid 1px #999;
	cursor: pointer;
	transition: color .3s ease-in, background-color .2s ease-in;
	&:hover {
		background-color: var(--black);
		color: var(--white);
	}
	&:focus {
		outline: none;
	}
`
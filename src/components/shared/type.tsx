import styled from "styled-components"
import { breakPoints } from "./break-points"

export const Author = styled.div`
	font-weight:bold;
`

export const BRMobile = styled.br`
  @media (min-width: ${breakPoints.tablet}) {
    display: none;
  }
`

export const ExternalLink = styled.a.attrs(() => ({
  target: "_blank",
  rel: "noopener noreferrer"
}))`
  color: var(--primary);
  text-decoration: underline;
  transition: 
    text-decoration .3s ease-in,
    opacity .3s ease-in,
    color .3s ease-in;
  &:hover {
    opacity: .7;
    text-decoration: underline;
  }
  &:visited {
    color: inherit;
    opacity: .7;
    font-style: italic;
  }
`

export const Header = styled.h1`
  color: var(--text-colour);
  margin-bottom: 1.5em;
  font: 600 3rem/130% var(--display-font);
`

export const HeaderCenter = styled(Header)`
  text-align:center;
`

export const HR = styled.hr`
	border: 1px solid var(--primary);
	width: 50%;
	margin-top: 1em;
	margin-bottom: .5em;
`

export const SubHeader = styled.h2`
  font: 600 2.4rem/120% var(--display-font);
  margin-bottom: 1.4em;
  color: var(--text-colour);
  @media (min-width: ${breakPoints.tablet}){
    margin-bottom: 1.6em;
  }
`

export const SubHeaderCenter = styled(SubHeader)`
	text-align: center;
`
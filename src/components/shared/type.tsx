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

export const ExternalLink = styled.a.attrs(props => ({
  target: "_blank",
  rel: "noopener noreferrer"
}))`
  color: var(--primary);
  text-decoration: none;
  &:visited {
    color: var(--mid-grey);
  }
`

export const Header = styled.h1`
  color: var(--black);
  margin-bottom: .75rem;
  font-size: 2em;
`

export const HeaderCenter = styled(Header)`
  text-align:center;
`

export const HR = styled.hr`
	border: 1px solid var(--primary);
	width: 50%;
	margin-top: 1rem;
	margin-bottom: .5rem;
`

export const SubHeader = styled.h2`
  font-size: 1.25rem;
	margin-bottom: .5rem;
`

export const SubHeaderCenter = styled.h2`
	text-align: center;
`
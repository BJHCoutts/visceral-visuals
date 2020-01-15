import styled from "styled-components"
import { breakPoints } from "./break-points"

export const Header = styled.h1`

`

export const SubHeader = styled.h2`
	text-align: center;
	margin-bottom: 1.5rem;
`

export const BRMobile = styled.br`
  @media (min-width: ${breakPoints.tablet}) {
    display: none;
  }
`
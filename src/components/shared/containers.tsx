import styled from "styled-components"
import { fadeIn } from "./animations"
import { breakPoints } from "./break-points"

export const BannerContainer = styled.section`
	grid-column: 1/-1;
  display: grid;
  grid-template-columns: var(--grid);
  padding: var(--banner-padding-mobile);
  @media (min-width: ${breakPoints.tablet}) {
		padding: var(--banner-padding-desktop);
  }
`

export const BannerContent = styled.div`
	grid-column: 2;
`

export const SectionContainer = styled.section`
	grid-column: 1/-1;
	display: grid;
	grid-template-columns: var(--grid);
	padding: var(--section-padding-mobile);
	animation: ${fadeIn} 1s ease-in;
	@media (min-width: ${breakPoints.tablet}) {
		padding: var(--section-padding-desktop);
	}
`

export const SectionContent = styled.div`
	grid-column: 2;
`
// import { Link } from "gatsby"
import * as React from "react"
import styled, {keyframes} from "styled-components"

// import { MobileMenu } from "./mobile-menu"

// import searchIcon from "../../icons/baseline-search-24px-white.svg"
// import hamburger from "../../icons/baseline-menu-24px.svg"
import VVLogo from "../../logos/GearsFeather.svg"
import { SectionContainer, SectionContent } from "../shared/containers"
import { breakPoints } from "../shared/break-points"

interface Props {
  siteTitle: string
}

export default function Header () {

  return (
    <SectionContainer>
      <HeaderContent>
        <LogoImg src={VVLogo} alt="Visceral Visuals logo"/>
        <Subtitle>by Brian Coutts</Subtitle>
       </HeaderContent>
    </SectionContainer>
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

const HeaderContent = styled(SectionContent)`
  place-items: center;
`

const LogoImg = styled.img`
  display:block;
  width:100%;
  height:auto;
  animation: ${fadeIn} 1s ease-in;
  margin: 0 auto;
  @media (min-width: ${breakPoints.tablet}){
    max-width: 350px;
  }
`

const Subtitle = styled.h2`
  text-align:center;
  text-transform: lowercase;
  font-variant:small-caps;
  letter-spacing: .08em;
`
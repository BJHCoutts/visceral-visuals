import { Link } from "gatsby"
import * as React from "react"
import styled, {keyframes} from "styled-components"

import { MobileMenu } from "./mobile-menu"

import searchIcon from "../../icons/baseline-search-24px-white.svg"
import hamburger from "../../icons/baseline-menu-24px.svg"
import VVLogo from "../../logos/GearsFeather.svg"
import { SectionContainer, SectionContent } from "../shared/containers"
import { breakPoints } from "../shared/break-points"

interface Props {
  siteTitle: string
}

export const Header = ({ siteTitle }: Props) => {

  return (
    <SectionContainer>
      <SectionContent>
        <LogoImg src={VVLogo}/>
       </SectionContent>
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

const LogoImg = styled.img`
  display:block;
  width:100%;
  height:auto;
  animation: ${fadeIn} 1s ease-in;
  margin: 0 auto;
  @media (min-width: ${breakPoints.tablet}){
    max-width: 300px;
  }
`
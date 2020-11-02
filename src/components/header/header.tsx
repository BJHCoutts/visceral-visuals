import * as React from "react"
import styled, {keyframes, StyledComponent} from "styled-components"

import VVLogo from "../../logos/GearsFeather.svg"
import { SectionContainer, SectionContent } from "../shared/containers"
import { breakPoints } from "../shared/break-points"
import { Context } from "../context/context";
import { Gears } from "../gears/gears";


export const Header:React.FC = () => {

  return (
    <HeaderContainer>
      <HeaderContent>
        <LogoImg src={VVLogo} alt="Visceral Visuals logo"/>
        <Subtitle>by Brian Coutts</Subtitle>
       </HeaderContent>
    </HeaderContainer>
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

const HeaderContainer = styled(SectionContainer)`
  background-image: linear-gradient(hsla( 0, 0%, 100%, .2), hsla( 0, 0%, 100%, 1), hsla( 0, 0%, 100%, .3));
  overflow-x: hidden;
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
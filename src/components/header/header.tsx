import * as React from "react"
import styled, {keyframes, StyledComponent} from "styled-components"

import VVLogo from "../../logos/GearsFeather.svg"
import { SectionContainer, SectionContent } from "../shared/containers"
import { breakPoints } from "../shared/break-points"
import { Button } from "../shared/forms"

interface IProps {
  setTheme: Function
}

export const Header:React.FC<IProps> = ({setTheme}) => {

  return (
    <HeaderContainer>
      <HeaderContent>
        <LogoImg src={VVLogo} alt="Visceral Visuals logo"/>
        <Subtitle>by Brian Coutts</Subtitle>
        <ThemeButtonContainer>
          <LightThemeButton onClick={() => setTheme('light')}>Light Theme</LightThemeButton>
          <DarkThemeButton onClick={() => setTheme('dark')}>Dark Theme</DarkThemeButton>
        </ThemeButtonContainer>
       </HeaderContent>
    </HeaderContainer>
  )
}

const DarkThemeButton = styled(Button)`
  text-transform: lowercase;
`

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

const LightThemeButton = styled(Button)`
  text-transform: lowercase;
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
  margin-bottom: 1em;
`

const ThemeButtonContainer = styled.div`
  display: flex;
  max-width: 300px;
  justify-content: space-around;
  margin: 0 auto;
`
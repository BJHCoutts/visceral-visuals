import React from "react"
import styled from "styled-components"

import VVLogo from "../../logos/VVLogoGearsFeather.svg"
import VVLogoDarkMode from "../../logos/VVGearsFeatherLogoDarkMode.svg"
import { SectionContainer, SectionContent } from "../shared/containers"
import { breakPoints } from "../shared/break-points"
import { Button } from "../shared/forms"
import { fadeIn } from "../shared/animations"

interface IProps {
  theme: string
  setTheme: Function
}

export const Header:React.FC<IProps> = ({theme, setTheme}) => {

  return (
    <HeaderContainer>
      <HeaderContent>
      { theme === 'dark' ? 
      <LogoImgDarkMode src={VVLogoDarkMode} alt="Visceral Visuals logo"/>
      : <LogoImg src={VVLogo} alt="Visceral Visuals logo"/>}
        <Subtitle>by Brian Coutts</Subtitle>
        <Subtitle>selected theme: {theme} </Subtitle>
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
  background-color: var(--black);
  color: var(--white);
  border-color: var(--white);
  &:hover {
    background-color: var(--white);
    color: var(--black);
    border-color: var(--black);
    text-decoration: underline;
  }
`

const HeaderContainer = styled(SectionContainer)`
  background-image: var(--gradient-colour);
  overflow-x: hidden;
  padding: .5em 0 3.5em;
  @media (min-width: ${breakPoints.tablet}) {
    padding: 1em 0 5em;
  }
`

const HeaderContent = styled(SectionContent)`
  place-items: center;
`

const LightThemeButton = styled(Button)`
  text-transform: lowercase;
    border-color: var(--black);
  &:hover {
    border-color: var(--white);
    text-decoration: underline;
  }
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
const LogoImgDarkMode = styled.img`
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
  color: var(--text-colour);
`

const ThemeButtonContainer = styled.div`
  display: flex;
  max-width: 300px;
  justify-content: space-around;
  margin: 0 auto;
`
import { Link } from "gatsby"
import * as React from "react"
import styled, {keyframes} from "styled-components"

import { MobileMenu } from "./mobile-menu"

import searchIcon from "../../icons/baseline-search-24px-white.svg"
import hamburger from "../../icons/baseline-menu-24px.svg"
import VVLogo from "../../logos/GearsFeather.svg"

interface Props {
  siteTitle: string
}

export const Header = ({ siteTitle }: Props) => {

  return (
    <Container>
      <Content>
       <LogoImg src={VVLogo}/>
       </Content>
    </Container>
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

const Container = styled.div`
  display: grid;
  grid-template-columns: var(--grid-columns);
  justify-items:center;
`

const Content = styled.div`
  grid-column: 2;
  padding: 0;
`

const LogoImg = styled.img`
  width:300px;
  height:auto;
  animation: ${fadeIn} 1s ease-in;
`
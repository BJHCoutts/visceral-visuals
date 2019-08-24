import { Link } from "gatsby"
import * as React from "react"
import styled from "styled-components"

import { MobileMenu } from "./mobile-menu"

import searchIcon from "../../icons/baseline-search-24px-white.svg"
import hamburger from "../../icons/baseline-menu-24px.svg"
import VVLogo from "../../images/VVLogo.svg"

interface Props {
  siteTitle: string
}

export const Header = ({ siteTitle }: Props) => {
  const [searchInputValue, setSearchInputValue] = React.useState("")
  const [searchInputDisplay, setSearchInputdisplay] = React.useState(
    "scaleX(0)"
  )
  const [maxHeight, setMaxHeight] = React.useState("0")

  let SearchInput = styled.input`
    border-style: none;
    border-bottom: solid 1px slategrey;
    background: none;
    outline: none;
    width: 80%;
    font: 0.95rem/1rem sans-serif;
    transform: ${searchInputDisplay};
  `

  return (
    <Container>
      <Content>
       <LogoImg src={VVLogo}/>
       </Content>
    </Container>
  )
}

const Container = styled.div`
  display: grid;
  grid-template-columns: var(--grid-columns);
`

const Content = styled.div`
  grid-column: 2;
  padding: 50px 0;
`

const LogoImg = styled.img`
  width:300px;
  height:auto;
`
import { Link } from "gatsby"
import * as React from "react"
import styled from "styled-components"

import { MobileMenu } from "./mobile-menu"

import searchIcon from "../../icons/baseline-search-24px-white.svg"
import hamburger from "../../icons/baseline-menu-24px.svg"

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
    <React.Fragment>
      <MobileMenu maxHeight={maxHeight} />
      <HeaderContainer>
        <HeaderContent>
          <Link to="/">
            <img
              src={hamburger}
              style={{
                height: "100%",
                width: "auto",
              }}
              onClick={() => setMaxHeight(maxHeight === "0" ? "100rem" : "0")}
            />
          </Link>
          <SearchContainer>
            <SearchInput
              value={searchInputValue}
              onChange={e => setSearchInputValue(e.target.value)}
            />
            <img
              src={searchIcon}
              style={{ cursor: "pointer" }}
              onClick={e =>
                setSearchInputdisplay(
                  searchInputDisplay === "scaleX(0)" ? "scaleX(1)" : "scaleX(0)"
                )
              }
            />
          </SearchContainer>
        </HeaderContent>
      </HeaderContainer>
      <Title>blog basic</Title>
      <DesktopMenu>
        <DesktopMenuItem>
          <Link to="/">home</Link>
        </DesktopMenuItem>
        |<DesktopMenuItem>blog</DesktopMenuItem>|
        <DesktopMenuItem>about</DesktopMenuItem>|
        <DesktopMenuItem>contact</DesktopMenuItem>
      </DesktopMenu>
    </React.Fragment>
  )
}

const DesktopMenu = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    margin: 0 auto 8rem auto;
    justify-content: space-around;
    align-items: center;
    max-width: 960px;
    padding: 0 8rem;
  }
`

const DesktopMenuItem = styled.span`
  font: 100 1.75rem/1.5rem var(--menu-font);
`

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  background: darkslategrey;
  width: 100%;
  z-index: 1;
  @media (min-width: 768px) {
    display: none;
  }
`

const HeaderContent = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  max-width: 960px;
  padding: 1rem;
`

const SearchContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
  height: 100%;
  align-items: center;
  transition: 2s;
`

const Title = styled.h1`
  font: 4rem/4rem var(--display-font);
  color: black;
  text-align: center;
  margin: 8rem auto 4rem auto;
  @media (min-width: 768px) {
    margin: 4rem auto 6rem auto;
    font-size: 7rem;
  }
`

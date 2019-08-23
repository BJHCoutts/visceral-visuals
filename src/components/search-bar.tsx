import * as React from "react"
import styled from "styled-components"

import searchIcon from "../icons/baseline-search-24px-dark.svg"

export const SearchBar = () => {
  const [searchInputValue, setSearchInputValue] = React.useState("")

  const SearchInput = styled.input`
    border-style: none;
    border-bottom: solid 1px slategrey;
    background: none;
    outline: none;
    width: 200px;
    font: 0.95rem/1rem sans-serif;
  `

  return (
    <Container>
      <SearchInput
        value={searchInputValue}
        onChange={e => setSearchInputValue(e.target.value)}
      />
      <img src={searchIcon} style={{ marginLeft: "16px" }} />
    </Container>
  )
}

const Container = styled.div`
  background-color: rgba(245, 245, 245, 0.8);
  grid-column: 1/4;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-flow: row nowrap;
	padding: 2rem;
	@media (min-width: 768px) {
    width: 100%;
    left: 0;
    right: 0;
    margin: 0 0 2rem 0;
`

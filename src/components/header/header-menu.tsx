import * as React from "react"
import styled from "styled-components"

interface Props {
  menuOptions: string[]
}
export const HeaderMenu = (props: Props) => {
  return (
    <Container>
      {props.menuOptions.map((menuOption: string) => {
        return <Title key="menuOption">{menuOption}</Title>
      })}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: black;
  padding: 0.75rem 6rem;
`

const Title = styled.h2`
  font-size: 1.25em;
  text-align: center;
  font-variant: small-caps;
  color: white;
  display: inline;
  margin-right: 1rem;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  :hover {
    color: grey;
  }
`

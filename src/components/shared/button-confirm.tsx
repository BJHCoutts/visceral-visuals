import * as React from "react"
import styled from "styled-components"

interface Props {
  label: string
}

export const ButtonConfirm = (props: Props) => {
  return <ButtonTag>{props.label}</ButtonTag>
}

const ButtonTag = styled.button`
  padding: 0.5rem 1.75rem;
  border: solid 3px white;
  border-radius: 5px;
  box-shadow: var(--shadow);
  background: none;
  color: white;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  text-transform: uppercase;
  :hover {
    background-color: darkgrey;
  }
  :focus {
    outline: none;
  }
`

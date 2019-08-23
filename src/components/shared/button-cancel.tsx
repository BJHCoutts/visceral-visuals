import * as React from "react"
import styled from "styled-components"

interface Props {
  label: string
}

export const ButtonCancel = (props: Props) => {
  return <ButtonTag>{props.label}</ButtonTag>
}

const ButtonTag = styled.button`
  border: none;
  padding: 1rem 1.5rem;
  background: none;
  color: white;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  :hover {
    color: darkgrey;
  }
  :focus {
    outline: none;
  }
`

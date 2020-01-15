import * as React from "react"

import styled from "styled-components"

interface Props {
  children: React.ReactNode
  width: string
}

export const Card = (props: Props) => {
  const Container = styled.div`
    border: none;
    border-radius: 2px;
    box-shadow: var(--shadow);
    width: ${props.width};
    overflow: hidden;
    background-color: rgba(245, 245, 245, 0.8);
    padding: 25px;
    margin-bottom: 50px;
  `
  return <Container>{props.children}</Container>
}

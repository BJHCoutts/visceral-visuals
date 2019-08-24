import * as React from "react"
import styled from "styled-components"

export const Footer = () => {
  return (
    <FooterContent>
      <Content>
        <a href="mailto:bjhcoutts@gmail.com">bjhcoutts@gmail.com</a>
      </Content>
    </FooterContent>
  )
}

const Content = styled.div`
  color: white;
  grid-column: 2;
`

const FooterContent = styled.footer`
  background-color: black;
  display: grid;
  grid-template-columns: var(--grid-columns);
  padding: 25px 0;
`

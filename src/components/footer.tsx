import * as React from "react"
import styled from "styled-components"

export const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <a href="mailto:bjhcoutts@gmail.com">bjhcoutts@gmail.com</a>
        <span>BG Photo by okeykat on Unsplash</span>
      </FooterContent>
    </FooterContainer>
  )
}
const FooterContainer = styled.footer`
  background-color: black;
  display: grid;
  grid-template-columns: var(--grid);
  padding: 25px 0;
`

const FooterContent = styled.div`
  color: white;
  grid-column: 2;
  display: flex;
  justify-content: space-between;
`
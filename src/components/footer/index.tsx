import React from "react"
import styled from "styled-components"
import { breakPoints } from "../shared/break-points"
import { ExternalLink } from "../shared/type"

export default (function Footer () {
  return (
    <FooterContainer>
      <FooterContent>
        <EmailLink href="mailto:bjhcoutts@gmail.com">bjhcoutts@gmail.com</EmailLink>
        <span>BG Photo by okeykat on Unsplash</span>
      </FooterContent>
    </FooterContainer>
  )
}) as React.FC

const EmailLink = styled(ExternalLink)`
  color: var(--white);
  margin-bottom: 1em;
  font-size: 1.2rem;
  @media (min-width: ${breakPoints.tablet}){
    margin-bottom: 0;
  }
`

const FooterContainer = styled.footer`
  background-color: black;
  display: grid;
  grid-template-columns: var(--grid);
  padding: 25px 0;
  font-family: var(--display-font);
`

const FooterContent = styled.div`
  color: white;
  grid-column: 2;
  display: flex;
  justify-content: space-between;
  flex-flow: column;
  @media (min-width: ${breakPoints.tablet}) {
    flex-flow: row;
  }
`
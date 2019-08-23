import * as React from "react"
import styled from "styled-components"

import socials from "../icons/socials.svg"

export const Footer = () => {
  const [emailInputValue, setEmailInputValue] = React.useState("")
  return (
    <FooterTag>
      <Content>
        <img src={socials} style={{ height: "100px" }} />
      </Content>
    </FooterTag>
  )
}

const Content = styled.div`
  color: white;
  padding: 0 1.0875rem;
  margin: 0 auto;
  max-width: 960px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

const FooterTag = styled.footer`
  background-color: grey;
`

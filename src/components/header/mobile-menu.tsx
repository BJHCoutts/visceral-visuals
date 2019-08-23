import * as React from "react"
import styled from "styled-components"

interface Props {
  maxHeight: string
}

export const MobileMenu = ({ maxHeight }: Props) => {
  const Container = styled.div`
    position: fixed;
    z-index: 5;
    top: 0;
    left: 60px;
    background-color: white;
    box-shadow: var(--shadow);
    height: auto;
    max-height: ${maxHeight};
    transition: 2s;
    overflow: hidden;
    @media (min-width: 786px) {
      display: none;
    }
  `

  return (
    <Container>
      <InnerContainer>
        <MenuItem>home</MenuItem>
        <HR />
        <MenuItem>blog</MenuItem>
        <HR />
        <MenuItem>about</MenuItem>
        <HR />
        <MenuItem>contact</MenuItem>
      </InnerContainer>
    </Container>
  )
}

const HR = styled.hr`
  margin: 1rem 0.25rem;
  opacity: 0.5;
`

const InnerContainer = styled.div`
  margin: 2rem;
`

const MenuItem = styled.div``

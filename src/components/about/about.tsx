import * as React from "react"
import styled from "styled-components"

import { Card } from "../shared/card"

export const About = () => {
  return (
    <React.Fragment>
      <Image />
      <CardContainer>
        <Card width="100%">
          <BodyText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation.
          </BodyText>
          <Title>about me...</Title>
        </Card>
      </CardContainer>
    </React.Fragment>
  )
}

const BodyText = styled.div`
  color: rgba(40, 40, 40, 0.8);
  margin-bottom: 3rem;
`
const CardContainer = styled.div`
  grid-column: 2;
  margin-bottom: 25px;
`

const Image = styled.div`
  background-color: grey;
  height: 200px;
  grid-column: 1/4;
  margin-bottom: 25px;
  @media (min-width: 768px) {
    width: 100%;
    margin: 0 0 2rem 0;
  }
`

const Title = styled.h2`
  text-align: right;
  font: 2rem/2rem var(--display-font);
`

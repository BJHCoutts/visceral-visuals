import * as React from "react"
import styled from "styled-components"

import { Card } from "../shared/card"

export const Follow = () => {
  return (
    <Container>
      <Card width="100%">
        <Title>follow along</Title>
        <ImageGrid>
          <Image />
          <Image />
          <Image />
          <Image />
          <Image />
          <Image />
          <Image />
          <Image />
        </ImageGrid>
      </Card>
    </Container>
  )
}

const Container = styled.div`
  grid-column: 2;
  margin-bottom: 25px;
`

const Image = styled.div`
  background-color: grey;
  height: 100px;
  width: 100%;
`

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
`

const Title = styled.h2`
  font: 2rem/2rem var(--display-font);
  text-align: center;
  margin-bottom: 1.5rem;
`

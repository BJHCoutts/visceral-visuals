import * as React from "react"
import styled, { keyframes } from "styled-components"

import arrowLeft from "../../icons/baseline-keyboard_arrow_left-24px.svg"
import arrowRight from "../../icons/baseline-keyboard_arrow_right-24px.svg"

export const Carousel = () => {
  return (
    <Container>
      <Cell>
        <Arrow src={arrowLeft} />
        <Image />
        <Arrow src={arrowRight} />
      </Cell>
    </Container>
  )
}

const ArrowAnimation = keyframes`
	0%{
		transform: translate(-3px);
	}
	50%{
		transform: translate(3px);		
	}
	100%{
		transform: translate(-3px);
	}
`

const Arrow = styled.img`
  cursor: pointer;
  :hover {
    animation: ${ArrowAnimation} 1s infinite;
  }
  @media (min-width: 768px) {
    display: none;
  }
`

const Cell = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0 auto 4rem auto;
  @media (min-width: 768px) {
    max-width: 100%;
    width: 100%;
  }
`

const Container = styled.div`
  grid-column: 2;
`

const Image = styled.div`
  height: 200px;
  width: 200px;
  background-color: grey;
  margin: 0 auto;
  @media (min-width: 768px) {
    width: 100%;
    height: 600px;
  }
`

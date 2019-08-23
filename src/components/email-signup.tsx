import * as React from "react"
import styled from "styled-components"

export const EmailSignup = () => {
  return (
    <Container>
      <Header>get in the loop</Header>
      <SubmitForm>
        <Label>
          <Input placeholder="name" />
        </Label>
        <Label>
          <Input placeholder="email" />
        </Label>
        <SubmitButton>submit</SubmitButton>
      </SubmitForm>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-content: center;
  padding: 2rem 0 2.75rem 0;
	background-color: rgba(245, 245, 245, 0.8);
	grid-column: 1/4;
	@media (min-width: 768px) {
    width: 100%;
    left: 0;
    right: 0;
    margin: 0 0 2rem 0;
`
const Header = styled.span`
  font: 3rem/3.5rem var(--display-font);
  text-align: center;
  margin-bottom: 1rem;
`

const Input = styled.input`
  display: block;
  border: none;
  margin: 0.5rem auto 1.5rem auto;
  background-color: white;
  height: 2.25rem;
  border-radius: 3px;
  width: 250px;
  padding: 0 1rem;
`

const Label = styled.label`
  display: block;
  font-size: 0.85rem;
`

const SubmitButton = styled.button`
  display: block;
  margin: 0 auto;
  padding: 0.75rem 4rem;
  margin-top: 1.25rem;
  border: solid slategrey 1px;
  border-radius: 1px;
  font: small-caps 1rem/1rem var(--body-font);
  box-shadow: var(--shadow);
  letter-spacing: 0.05rem;
  background-color: lightgrey;
`

const SubmitForm = styled.div``

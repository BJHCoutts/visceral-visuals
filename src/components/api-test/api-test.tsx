import React from 'react'
import { BodyTextContainer, BodyTextP, SubHeader } from '../shared/type'

export const APITest:React.FC = () => {

	const [dadJoke, setDadJoke] = React.useState("loading...")

	React.useEffect(() => {	const fetchDadJoke = (async () => {
			const settings = {
				headers: {
					Accept: 'application/json'
				}
			}
			const res = await fetch('https://icanhazdadjoke.com', settings)
			const data = await res.json()
			return setDadJoke(data.joke)
		})().catch(err=>console.error(err))
	},[])

	return(
		<>
			<SubHeader>Random Dad Joke API</SubHeader>
			<BodyTextContainer>
				<BodyTextP>{dadJoke}</BodyTextP>
			</BodyTextContainer>
		</>
	)
}
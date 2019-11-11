import React from 'react'
import styled from 'styled-components'

export const APITest = () => {

	const [jsonplaceholder, setJsonPlaceholder] = React.useState("loading...")
	const [dadJoke, setDadJoke] = React.useState("loading...")
	const [apiCom, setApiCom] = React.useState("loading")

	const fetchJSONPlaceholder = async () => {

		const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
		if (res.status === 200) {
			const data = await res.json()
			return setJsonPlaceholder(data.title)
		}else{
			throw new Error('unable to fetch JSON Placeholder')
		}
	}

	fetchJSONPlaceholder()

React.useEffect(() => {	const fetchDadJoke = async () => {
		const settings = {
			headers: {
				Accept: 'application/json'
			}
		}
		const res = await fetch('https://icanhazdadjoke.com', settings)
		const data = await res.json()
		return setDadJoke(data.joke)
	}
	
	fetchDadJoke()})
		
	const fetchRandomFact = async () => {
		const settings = {}
		const res = await fetch(`https://api.fungenerators.com`)

	}

	return(
		<div>
			<h2>API Calls</h2>
			<ul>
				<li>JSON Placeholder: {jsonplaceholder}</li>
				<li>Dad Joke: {dadJoke}</li>
				<li>API.com: {apiCom}</li>
			</ul>
		</div>
	)
}
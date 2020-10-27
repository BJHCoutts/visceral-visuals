import React from 'react'
// import styled from 'styled-components'

export default (function APITest () {

	const [jsonplaceholder, setJsonPlaceholder] = React.useState("loading...")
	const [dadJoke, setDadJoke] = React.useState("loading...")
	const [dailyFact, setDailyFact] = React.useState("loading")

	React.useEffect(() => {
		const fetchJSONPlaceholder = (async () => {

			const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
			if (res.status === 200) {
				const data = await res.json()
				return setJsonPlaceholder(data.title)
			}else{
				throw new Error('unable to fetch JSON Placeholder')
			}
		})()
	}, [])	

	React.useEffect(() => {	const fetchDadJoke = (async () => {
			const settings = {
				headers: {
					Accept: 'application/json'
				}
			}
			const res = await fetch('https://icanhazdadjoke.com', settings)
			const data = await res.json()
			return setDadJoke(data.joke)
		})().catch(err=>console.log(err))
	},[])
	
	// React.useEffect(() => {

	// 	const fetchRandomFact = (async () => {
	// 		const settings = {}
	// 		const res = await fetch(`https://api.fungenerators.com/fact/onthisday/event`)
	// 		const data = await res.json()
	// 		return setDailyFact(data.contents.event)
	// 	}) ()
	// }, [] )

	return(
		<div>
			<h2>API Calls</h2>
			<ul>
				<li>JSON Placeholder: {jsonplaceholder}</li>
				<li>Dad Joke: {dadJoke}</li>
				{/* <li>API.com: {dailyFact}</li> */}
			</ul>
		</div>
	)
}) as React.FC
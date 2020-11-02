import React, { createContext, useState, FC } from 'react'

const context = {
	
}

const Context = createContext(context)

const ContextProvider: FC = ({children}) => {
	const [scrollPosition, setScrollPosition] = useState(0)

	document.addEventListener('scroll', () => {
		console.log(window.scrollY)
		setScrollPosition(window.scrollY)
	})

	return (
		<Context.Provider value={scrollPosition}>
			{children}
		</Context.Provider >
	)
}

export { ContextProvider, Context}
import React, { createContext, FC, useState, useEffect } from 'react'

const context = {
	
}

const Context = createContext(context)

const ContextProvider: FC = ({children}) => {
	const [scrollPosition, setScrollPosition] = useState(0)

	useEffect ( () => {
		document.addEventListener('scroll', () => {
			setScrollPosition(window.scrollY)
		})
	})

	return (
		<Context.Provider value={scrollPosition}>
			{children}
		</Context.Provider >
	)
}

// import { useScrollPosition } from '@n8tb1t/use-scroll-position'
// import { useScrollPosition } from './shared/use-scroll-position'

// const scrollTo = (id:string) => {
//   const el = document.getElementById(id)
//   if (el) {
//     el.scrollIntoView({behavior:"smooth", block:"center"})
//   }
// }
// const [ sticky, setSticky ] = React.useState(false)
// const [ open, setOpen ] = React.useState(false)
// const [ logoHeight, setLogoHeight] = React.useState('300')

// useScrollPosition(
//   ({ prevPos, currPos }) => {
//     // const isShow = currPos.y > prevPos.y
//     // if (isShow !== sticky) setSticky(false)
//     if (currPos.y < 150) setSticky(false)
//     if (currPos.y > 150) setSticky(true)
//   },
//   [sticky]
// )

export { ContextProvider, Context}